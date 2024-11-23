import { useEffect, useState } from "react";
import authImg from "../../assets/images/auth.png";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/auth";
import Spinner from "../../components/Spinner";
import Cookies from "js-cookie";
import SeoData from "../../SEO/SeoData";

// For google signin
import {googleAuth, googleProvider} from "../../components/googleSignIn/config";
import { signInWithPopup } from "firebase/auth";
import Home from "../../components/googleSignIn/Home";

const Login = () => {
    //hooks->
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { auth, setAuth, isAdmin } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const location = useLocation();

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (auth.token) {
            isAdmin
                ? navigate("/admin/dashboard")
                : navigate("/user/dashboard");
        }
    }, [navigate, auth, isAdmin]);
    // axios.defaults.headers.common["Authorization"] = auth.token;

    //form submission handler
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            toast(
                "The backend is starting up, please wait for a minute if the loader is visible."
            );

            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/login`,
                {
                    email,
                    password,
                }
            );
            // console.log(response);

            if (response.status === 200) {
                toast.success("Logged in Successfully!");
                setAuth({
                    ...auth,
                    user: response.data.user,
                    token: response.data.token,
                });

                Cookies.set("auth", JSON.stringify(response.data), {
                    expires: 7,
                });
                navigate(location.state || "/");
            }
        } catch (error) {
            console.error("Error:", error);
            // invalid password
            error.response?.status === 401 &&
                error.response.data?.errorType === "invalidPassword" &&
                toast.error("Wrong password!");
            //user not registered
            error.response?.status === 401 &&
                error.response.data?.errorType === "invalidUser" &&
                toast.error("User not Registered!");
            //server error
            error.response?.status === 500 &&
                toast.error(
                    "Something went wrong! Please try after sometime."
                ) &&
                navigate("/login");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Google signin code
    const [value, setValue] = useState("");
    const handleClick = () => {
        signInWithPopup(googleAuth, googleProvider)
            .then((data) => {
                console.log(JSON.stringify(data));
                
                const email = data.user.email;
                setValue(email);
                localStorage.setItem("email", email);
                setAuth({
                    ...auth,
                    user: data.user,
                    token: data.user.getIdToken,
                });

                Cookies.set("auth", JSON.stringify(data), {
                    expires: 7,
                });
                navigate(location.state || "/"); // Redirect after login
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
            });
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setValue(storedEmail);
            navigate(location.state || "/"); // Redirect if already logged in
        }
    }, [navigate, location.state]);

    // display content
    return (
        <>
            <SeoData
                title="Log in - Existing User"
                description="Log in with user details"
            />
            {isSubmitting ? (
                <Spinner />
            ) : (
                <div className="container bg-primaryBg mt-5 sm:mt-0 md:mt-0 lg:mt-0 py-[2px]">
                    <div className="flex items-center flex-col sm:flex-row md:flow-row lg:flex-row my-10 mx-auto w-full sm:w-[70vw] md:w-[70vw] lg:w-[70vw] min-h-[400px] md:h-[80vh] lg:h-[80vh] bg-white shadow-[0px_0px_8px_2px_rgba(212,212,212,0.6)] ">
                        {/* left view  */}
                       

                        {/* sign up form */}
                        <div className="p-10 w-full h-full sm:w-[60%] md:w-[60%] lg:w-[60%] flex flex-col gap-y-10 ">
                            <div className="w-full h-full ">
                                <form
                                    action="/login"
                                    method="post"
                                    className="w-[90%] mx-auto transition-all"
                                    onSubmit={handleFormSubmit}
                                >
                                    <div className="pt-3 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 ">
                                        <div className="relative">
                                            <input
                                                autoComplete="on"
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                className="w-full h-8 text-sm text-gray-900 placeholder-transparent border-b-2 peer focus:outline-none focus:border-blue-400"
                                                placeholder="Email address"
                                                required
                                                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" // Email pattern
                                            />
                                            <label
                                                htmlFor="email"
                                                className="absolute left-0 text-xs text-gray-600 transition-all -top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-xs"
                                            >
                                                Email Address
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <input
                                                autoComplete="off"
                                                id="password"
                                                name="password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                className="w-full h-8 text-sm text-gray-900 placeholder-transparent border-b-2 peer focus:border-blue-400 focus:outline-none"
                                                placeholder="Password"
                                                required
                                                minLength="5"
                                            />
                                            <label
                                                htmlFor="password"
                                                className="absolute left-0 text-xs text-gray-600 transition-all -top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-xs"
                                            >
                                                Password
                                            </label>
                                            <span
                                                className="absolute cursor-pointer right-3 bottom-2 hover:text-black"
                                                onClick={handlePasswordToggle}
                                            >
                                                {!showPassword && <AiFillEye />}
                                                {showPassword && (
                                                    <AiFillEyeInvisible />
                                                )}
                                            </span>
                                        </div>
                                        <div className="text-[9px] text-slate-500 ">
                                            <p>
                                                By continuing, you agree to
                                                ActiveAttire&apos;s Terms of Use and
                                                Privacy Policy.
                                            </p>
                                        </div>

                                        <div className="relative flex flex-col">
                                            <button className="bg-orange uppercase text-white text-[14px] font-[500] rounded-sm px-2 py-1">
                                                Log in
                                            </button>
                                        </div>
                                        <div>
                                        {!value ? (
                                            <button
                                                onClick={handleClick}
                                                className="bg-orange uppercase text-white text-[14px] font-[500] rounded-sm px-2 py-1"
                                            >
                                                Google Log in
                                            </button>
                                        ) : null}
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="relative w-full text-center -mt-7">
                                <Link
                                    to="/forgot-password"
                                    className=" text-primaryBlue font-[500] text-[12px] "
                                >
                                    Forgot Password ?
                                </Link>
                            </div>
                            <div className="relative w-full mt-4 text-center">
                                <Link
                                    to="/register"
                                    className=" text-primaryBlue font-[500] text-[12px] "
                                >
                                    New to ActiveAttire? Create an account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
