

"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignup = async () => {
    const res = await axios.post(`/api/user/register`, {
      name,
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleLogin = async () => {
    const res = await axios.post(`/api/user/login`, {
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  return (
    <div>
      <Head>
        <title>TRIPY - Login</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-login-background bg-no-repeat bg-cover ">
        <div className="w-full max-w-4xl px-4">
          <div className="flex flex-col justify-center items-center mb-8">
            <h2 className="text-5xl m-4 text-white font-bold">TRIPY</h2>
            <p className="text-2xl text-white font-bold text-center">
              Hotels and homes across 800 cities, 24+ countries
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-cyan-700 to-cyan-200 border border-blue-500 rounded-md p-8">
            <div className="text-black mb-8 md:mb-0 md:mr-8 w-full md:w-1/2">
              <p className="font-bold text-5xl mb-5 text-center">
                There’s a smarter way to TRIPY around
              </p>
              <p className="text-2xl text-justify">
                Sign up with your phone number and get exclusive access to
                discounts and savings on TRIPY stays and with our many travel
                partners.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <p className="h-10 flex items-center justify-center bg-gray-500  text-lg font-bold text-white mb-8">
                Sign up & Get ₹500 TRIPY Money
              </p>
              <div className="px-4">
                <h3 className="text-5xl font-bold my-5 text-center">
                  Login / Signup
                </h3>
                <p className="font-bold text-lg mb-1">
                  Please enter your email and password to continue
                </p>
                {!login && (
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="w-full mb-3 px-3 py-2 border border-blue-500 rounded-md"
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full mb-3 px-3 py-2 border border-blue-500 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter your password..."
                  className="w-full mb-3 px-3 py-2 border border-blue-500 rounded-md"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full h-12 text-lg font-bold bg-gray-600 text-white rounded-md mb-5"
                  onClick={login ? handleLogin : handleSignup}
                >
                  {login ? "Login" : "Sign Up"}
                </button>
                <p className="text-xl text-center">
                  <span>
                    {login
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </span>
                  <span
                    className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 cursor-pointer"
                    onClick={handleToggle}
                  >
                    {login ? "Sign Up" : "Login"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
