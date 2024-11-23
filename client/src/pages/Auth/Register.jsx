import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import auth from "../../assets/images/auth.png";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../components/Spinner";
import Checkbox from "@mui/material/Checkbox";
import SeoData from "../../SEO/SeoData";

import GoogleIcon from "@mui/icons-material/Google";
import backgroundImage from "../../assets/images/banner.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckbox = () => {
    setIsSeller(!isSeller);
  };

  const navigate = useNavigate();

  //form submission handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (password !== confirmPassword) {
        toast.error("Password does not match!");
        return;
      }
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/register`,
        {
          name,
          email,
          phone,
          password,
          address,
          isSeller,
        }
      );
      console.log(response);

      // Registration successful
      response.status === 201 &&
        toast.success("User Registered Successfully! Please Login...") &&
        navigate("/login");

      // Email already registered
      response.status === 200 &&
        toast.error("Email is already registered! Please Login...") &&
        navigate("/login");
    } catch (error) {
      console.error("Error:", error);

      //server error
      error.response.status === 500 &&
        toast.error("Something went wrong! Please try after sometime.") &&
        navigate("/register");
    } finally {
      setIsSubmitting(false);
    }
  };

  //display content
  return (
    //SEO
    <>
      <SeoData
        title="Sign up - New User"
        description="Register new user with details"
      />
      {isSubmitting ? (
        <Spinner />
      ) : (
        <div className="container bg-primaryBg mt-5 sm:mt-0 md:mt-0 lg:mt-0 py-[2px]">
          <div className="flex items-center flex-col sm:flex-row md:flex-row lg:flex-row my-10 bg bg-white rounded-xl shadow-lg w-full h-[600px]">
            {/* left view  */}
            <div
              className="flex flex-col w-full h-full bg-center bg-no-repeat bg-cover gap-y-10 rounded-tl-xl rounded-bl-xl"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* sign up form */}
            <div className="flex flex-col w-full p-5 h-900 gap-y-10 ">
              <div className="flex flex-col items-center w-full h-full">
                <form
                  action="/register"
                  method="post"
                  className="w-[90%] mx-auto transition-all"
                  onSubmit={handleFormSubmit}
                >
                  <div className="pt-3 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 ">
                    <div className="relative ">
                      <input
                        autoComplete="on"
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-6 text-sm text-gray-900 placeholder-transparent border-b-2 peer focus:border-blue-400 focus:outline-none"
                        placeholder="Full Name"
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 text-xs text-gray-600 transition-all -top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-xs"
                      >
                        Full Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="on"
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        autoComplete="on"
                        id="phone"
                        name="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-8 text-sm text-gray-900 placeholder-transparent border-b-2 peer focus:outline-none focus:border-blue-400"
                        placeholder="Mobile Number"
                        required
                        inputMode="numeric" // Set input mode to numeric
                        pattern="[0-9]*" // Allow only numeric values
                        minLength="10"
                        maxLength="10"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-0 text-xs text-gray-600 transition-all -top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-xs"
                      >
                        Mobile Number
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="confirm_password"
                        name="confirm_password"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full h-8 text-sm text-gray-900 placeholder-transparent border-b-2 peer focus:border-blue-400 focus:outline-none"
                        placeholder="Confirm Password"
                        required
                      />
                      <label
                        htmlFor="confirm_password"
                        className="absolute left-0 text-xs text-gray-600 transition-all -top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-xs"
                      >
                        Confirm Password
                      </label>
                      <span
                        className="absolute cursor-pointer right-3 bottom-2 hover:text-black"
                        onClick={handlePasswordToggle}
                      >
                        {!showPassword && <AiFillEye />}
                        {showPassword && <AiFillEyeInvisible />}
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="on"
                        id="address"
                        name="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full h-8 text-sm text-gray-900 placeholder-transparent border-b-2 peer focus:outline-none focus:border-blue-400"
                        placeholder="Address"
                        required
                      />
                      <label
                        htmlFor="address"
                        className="absolute left-0 text-xs text-gray-600 transition-all -top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-xs"
                      >
                        Address
                      </label>
                    </div>
                    <div className="relative">
                      <Checkbox
                        size="small"
                        onChange={handleCheckbox}
                        inputProps={{
                          "aria-label": "controlled",
                        }}
                      />
                      <span className="text-[12px] text-gray-700 font-[500]">
                        Register as Seller
                      </span>
                    </div>
                    <div className="relative flex flex-col">
                    <button className="uppercase bg-gray-700 text-white text-[14px] font-[500] rounded-sm px-2 py-1">
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
                <div className="relative w-full mt-4">
                  <Link to="/login">
                    <button className=" text-primaryBlue w-[90%] font-[600] text-[12px] ml-[5%] px-4 py-2  transition-all">
                      Existing User? Log in
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
