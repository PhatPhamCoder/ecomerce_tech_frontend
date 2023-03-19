import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { RxAvatar } from "react-icons/rx";
import { MdOutlinePrivacyTip } from "react-icons/md";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = () => {
    console.log("ffff");
  };

  const handleFileInputChange = (e) => {
    const file = e.target.file[0];
    setAvatar(file);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Title Page */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register a new user
        </h2>
      </div>
      {/* Body */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  id="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block border border-gray-300 px-3 py-2 w-full rounded-lg
              placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500
              sm:text-sm
              "
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block border border-gray-300 px-3 py-2 w-full rounded-lg
              placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500
              sm:text-sm
              "
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block border border-gray-300 px-3 py-2 w-full rounded-lg placeholder-gray-400 
              focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
              "
                />
                {visible ? (
                  <AiOutlineEye
                    size={25}
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    size={25}
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            {/* Upload Image */}
            <div className="flex items-center mb-0">
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8 text-blue-500" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-2 flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm
                  text-gray-700 hover:text-white bg-white hover:bg-blue-500 cursor-pointer hover:font-bold"
                >
                  <span>Upload Image</span>
                  <input
                    type="file"
                    id="file-input"
                    name="avatar"
                    className="sr-only"
                    accept=".png,.jpeg,.jpg"
                  />
                </label>
              </div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700 mt-2"
              ></label>
            </div>
            {/* Policy */}
            <div className="flex items-center w-gull">
              <MdOutlinePrivacyTip className="text-4xl" />
              <div className="ml-2 block text-sm text-gray-900">
                By creating an account, you agree to PTech's
                <Link
                  to={"/"}
                  className="hover:underline hover:text-[#F7AB0A] ml-1"
                >
                  Conditions of Use
                </Link>{" "}
                and
                <Link
                  to={"/"}
                  className="hover:underline hover:text-[#F7AB0A] ml-1"
                >
                  Privacy Notice
                </Link>
                .
              </div>
            </div>
            {/* Button Submit */}
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-blue-600 hover:bg-blue-700
            "
              >
                Sign Up
              </button>
            </div>
            {/* More info */}
            <div className={`${styles.noramlFlex}`}>
              <h4>Already have an account!</h4>
              <Link
                to={"/sign-up"}
                className="font-bold ml-1 text-blue-600 hover:underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
