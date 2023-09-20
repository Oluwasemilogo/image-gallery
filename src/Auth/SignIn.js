import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../Assets/signIn.svg";
import { auth } from "./Firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const newUser = userCredential.user;
      setUser(newUser);
      setError("");
      console.log("User logged in:", newUser);

      navigate("/gallery");
    } catch (error) {
      setError(error.message);
      setUser(null);
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="flex">
      <div className="hidden md:block w-1/2 h-screen">
        <img src={image} alt="" className="object-contain h-[100%] w-[100%]" />
      </div>
      <div className="w-full md:w-1/2 h-screen bg-white overflow-hidden">
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
                  value={loginEmail} // Use value prop to bind input to state
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-6 py-2 border trans outline-none rounded-full"
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
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-6 py-2 border outline-none rounded-full"
                />
              </div>

              <button
                type="button"
                className="w-full py-2 px-4 bg-[#385A64] text-white rounded-full"
                onClick={logIn}
              >
                Sign In
              </button>
              {error && <p className="text-red-500">{error}</p>}
              {user && user.email && (
                <p className="text-green-500">Logged in as: {user.email}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
