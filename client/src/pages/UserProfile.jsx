import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const { auth, setAuth } = useAuth();
  const [profile, setProfile] = useState(false);
  const [emailSection, setEmailSection] = useState(false);
  const [phoneSection, setPhoneSection] = useState(false);
  const [email, setEmail] = useState(auth?.user?.email);
  const [name, setName] = useState(auth?.user?.name);
  const [phone, setPhone] = useState(auth?.user?.phone);
  const [nameInputFocused, setNameInputFocused] = useState(false);

  const handleProfile = () => {
    setProfile(!profile);
  };

  const handleEmail = () => {
    setEmailSection(!emailSection);
  };

  const handlePhone = () => {
    setPhoneSection(!phoneSection);
  };

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    try {
      setProfile(false);

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/update-details`,
        {
          newName: name,
          email: auth?.user?.email,
        }
      );
      setAuth({
        ...auth,
        user: {
          ...auth.user,
          name: name,
        },
      });
      localStorage.removeItem("auth");
      localStorage.setItem("auth", JSON.stringify(response.data));

      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      setEmailSection(false);

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/update-details`,
        {
          newEmail: email,
          email: auth?.user?.email,
        }
      );
      setAuth({
        ...auth,
        user: {
          ...auth.user,
          email: email,
        },
      });
      localStorage.removeItem("auth");
      localStorage.setItem("auth", JSON.stringify(response.data));

      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePhoneSubmit = async (e) => {
    setPhoneSection(false);
    e.preventDefault();

    try {
      setProfile(false);

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}api/v1/auth/update-details`,
        {
          newPhone: phone,
          email: auth?.user?.email,
        }
      );
      setAuth({
        ...auth,
        user: {
          ...auth.user,
          phone: phone,
        },
      });
      localStorage.removeItem("auth");
      localStorage.setItem("auth", JSON.stringify(response.data));

      toast.success(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      //user not found
      error.response?.status === 401 &&
        error.response.data?.errorType === "invalidUser" &&
        toast.error("User not Found!");
      //server error
      error.response?.status === 500 &&
        toast.error("Something went wrong! Please try after sometime.");
    }
  };

  return (
    <div className="w-full h-[600px]">
      <div className="flex flex-col items-start w-full gap-10 p-5 mt-10 ">
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-5">
            <div className="font-[600] text-[16px] ">Personal Information</div>
            <button
              className="text-[14px] text-primaryBlue font-[500]"
              onClick={handleProfile}
            >
              {!profile ? "Edit" : "Cancel"}
            </button>
          </div>
          <div className=" h-[50px]">
            {profile ? (
              <form
                action="/update-details"
                method="post"
                onSubmit={handleNameSubmit}
                className="flex items-center gap-6"
              >
                <div
                  className={`border-2 p-2 flex flex-col max-h-[50px] min-h-[50px] w-[420px] rounded-xl${
                    nameInputFocused ? "border-primaryBlue border-1" : ""
                  }`}
                >
                  <label htmlFor="name" className="text-[10px]">
                   
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setNameInputFocused(true)}
                    onBlur={() => setNameInputFocused(false)}
                    className=" text-[18px] focus:outline-none item-center"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primaryBlue text-white font-[600] w-[80px] h-[40px] px-4 py-2 rounded-xl"
                  onClick={handleNameSubmit}
                >
                  Save
                </button>
              </form>
            ) : (
              <div className="text-2xl p-2 w-[220px] min-h-[50px] text-slate-500 flex items-center">
                {auth?.user?.name?.charAt(0).toUpperCase() +
                  auth?.user?.name?.slice(1)}
              </div>
            )}
          </div>
        </div>
        {/* email section */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-5">
            <div className="font-[600] text-[16px] ">Email Address</div>
            <button
              className="text-[14px] text-primaryBlue font-[500]"
              onClick={handleEmail}
            >
              {!emailSection ? "Edit" : "Cancel"}
            </button>
          </div>
          <div className="flex gap-6 ">
            {emailSection ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 p-2 flex flex-col max-h-[50px] min-h-[50px] w-[420px] rounded-xl text-[18px]"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" // Email pattern
              />
            ) : (
              <div className="text-2xl p-2 w-[220px] min-h-[50px] text-slate-500 flex items-center">
                {auth?.user?.email}
              </div>
            )}

            {emailSection && (
              <button
                className="bg-primaryBlue text-white font-[600] w-[80px] h-[40px] px-4 py-2 rounded-xl"
                onClick={handleEmailSubmit}
              >
                Save
              </button>
            )}
          </div>
        </div>
        {/* Mobile section */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-5">
            <div className="font-[600] text-[16px] ">Mobile Number</div>
            <button
              className="text-[14px] text-primaryBlue font-[500]"
              onClick={handlePhone}
            >
              {!phoneSection ? "Edit" : "Cancel"}
            </button>
          </div>
          <div className="flex gap-6 ">
            {phoneSection ? (
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 p-2 flex flex-col max-h-[50px] min-h-[50px] w-[420px] rounded-xl text-[18px]"
                inputMode="numeric" // Set input mode to numeric
                pattern="[0-9]*" // Allow only numeric values
                minLength="10"
                maxLength="10"
              />
            ) : (
              <div className="text-2xl p-2 w-[220px] min-h-[50px] text-slate-500 flex items-center">
                {auth?.user?.phone}
              </div>
            )}

            {phoneSection && (
              <button
                className="bg-primaryBlue text-white font-[600] w-[80px] h-[40px] px-4 py-2 rounded-sm"
                onClick={handlePhoneSubmit}
              >
                Save
              </button>
            )}
          </div>
        </div>
        {/* FAQ section */}

        {/* deactivate account */}
        <div className="text-[14px] text-primaryBlue font-[500] mt-4 mb-10">
          <Link to="./deactivate">Deactivate Account</Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
