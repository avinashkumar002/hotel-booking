
"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [auth]);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <div className="flex  justify-between border-b-2 border-blue-500 bg-blue-500 items-center">
      <div className="font-bold text-5xl cursor-pointer flex items-center text-gray-900 p-1.5 ml-8">TRIPY</div>    
      <div className="font-semibold text-xl font-serif">
        Find home far from home.
      </div>
        <div className="flex items-center ">
          {auth ? (
  <button className="font-bold cursor-pointer border border-blue-500 bg-indigo-300

  px-4 py-2 mr-10 rounded" onClick={handleLogout}>
    Logout
  </button>
) : (
  <Link href={"/login"} className="font-bold">
    <button className="border-2 border-blue-500 bg-indigo-300

text-gray-700 justify-content ml-6 mr-6  px-2 py-2 rounded">Login | Signup</button>
  </Link>
)}
        </div>
    </div>
  );
};

export default Header1;