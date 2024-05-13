
"use client";
import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState(" ");

  return (
    <div className=" bg-gradient-to-r from-cyan-600 to-cyan-200 h-60">

      <div className="p-6">
  <h2 className="text-3xl lg:text-4xl text-white text-center font-bold">
    Over 157,000 hotels and homes across 35 countries
  </h2>
  <div className="flex justify-center py-8 my-5 mx-2 lg:mx-20">
    <input
      type="text"
      placeholder="Search..."
      className="w-full lg:w-6/12 h-14 outline-none px-3 text-lg rounded-2xl lg:mr-2"
      onChange={(e) => {
        setCity(e.target.value);
      }}
    />
    <button
      type="submit"
      className="h-14 lg:h-auto rounded-2xl px-3 py-2 lg:w-32 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
    >
      <Link href={`/hotels?city=${city}`}>Search</Link>
    </button>
  </div>
 

</div>
    </div>
  );
};

export default Header3;





