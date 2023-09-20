import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../Assets/illustration.svg";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./Firebase-config";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Import Navigate

export const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const register = async () => {
    try {
      if (
        registerEmail === "user@example.com" &&
        registerPassword === "1Password"
      ) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
       const newUser = userCredential.user;
        setUser(newUser);
        setError("");
        console.log("User registered:", newUser);

        // Redirect to the gallery page upon successful registration
        navigate("/gallery");
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError(error.message);
      setUser(null);
      console.error("Registration error:", error.message);
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
            <h1 className="my-6 text-3xl font-normal">Create an account</h1>
            <h4>Please fill in your details.</h4>
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
                  onChange={(e) => setRegisterEmail(e.target.value)}
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
                  className="w-full px-6 py-2 border outline-none rounded-full"
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="w-full py-2 px-4 bg-[#385A64] text-white rounded-full "
                onClick={register}
              >
                Sign up
              </button>

              <p className="flex items-center gap-2 my-4 justify-center font-normal text-md">
                Already have an account?
                <Link to="/SignIn" className="">
                  <p className="text-[#385A64] font-medium underline hover:text-lg hover:font-bold ">
                    Sign In
                  </p>
                </Link>
              </p>
              {error && <p className="text-red-500">{error}</p>}
              {/* {user && user.email && (
                <p className="text-green-500 text-center">
                  Logged in as: {user.email}
                </p>
              )} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
