import React from "react";
import image from "../Assets/signIn.svg";

export const SignIn = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="w-1/2 h-screen ">
        <img src={image} alt="" className="object-contain h-[100%] w-[100%]" />
      </div>
      <div className="w-1/2 h-screen bg-white overflow-hidden">
        <div className="flex items-center justify-center h-full">
          <div className="w-1/2 p-6">
            <h1 className="my-6 text-3xl font-normal">Log In</h1>
            <h4>Welcome back! please fill in your details.</h4>
            <form>
              <div className="my-6">
                <label
                  htmlFor="email"
                  className="block mb-3 text-sm font-medium text-[#000]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-6 py-2 border trans outline-none rounded-full bg-[#E1E1E1]`}
                />
              </div>
              <div className="my-6">
                <label
                  htmlFor="password"
                  className="block mb-3 text-sm font-medium text-[#000]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`w-full px-6 py-2 border outline-none rounded-full bg-[#E1E1E1]`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#385A64] text-white rounded-full "
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
