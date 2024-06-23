"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/legacy/image"


const Header3 = () => {
  const [city, setCity] = useState(" ");
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const lowerCaseCity = city.toLowerCase();


  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:avinashsingh30oct@gmail.com?subject=Query from ${email}&body=${encodeURIComponent(query)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
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
      <Link href={`/hotels?city=${lowerCaseCity}`}>Search</Link>
    </button>
  </div>
</div>
    </div>
    <div className="mx-20">
    <h2 className="text-3xl md:text-3xl md:text-left lg:text-4xl text-center font-bold tracking-wider font-dream text-secondary">Trending Destinations</h2>
      <p className="text-sm md:text-base md:text-left text-center font-medium text-secondary">Most popular choices for travelers in India</p>
    
    
    <div className="flex flex-wrap justify-between">
  <div className="m-4 md:m-10 border-2 rounded-lg w-full md:w-48 h-60 border-gray-800">
  <Link href={`/hotels?city=delhi`}>
    <div className="block w-full h-full relative">
      <Image src="/delhi.jpg" alt="Delhi" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm font-semibold text-center">Delhi</p>
      </div>
    </div>
  </Link>
  </div>
  <div className="m-4 md:m-10 border-2 rounded-lg w-full md:w-48 h-60 border-gray-800">
  <Link href={`/hotels?city=jaipur`}>
    <div className="block w-full h-full relative">
      <Image src="/jaipur.jpg" alt="jaipur" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm font-semibold text-center">Jaipur</p>
      </div>
    </div>
  </Link>
  </div>
  <div className="m-4 md:m-10 border-2 rounded-lg w-full md:w-48 h-60 border-gray-800">
  <Link href={`/hotels?city=amritsar`}>
    <div className="block w-full h-full relative">
      <Image src="/amritsar.jpg" alt="Amritsar" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm font-semibold text-center">Amritsar</p>
      </div>
    </div>
  </Link>
  </div>
  <div className="m-4 md:m-10 border-2 rounded-lg w-full md:w-48 h-60 border-gray-800">
  <Link href={`/hotels?city=agra`}>
    <div className="block w-full h-full relative">
      <Image src="/agra.jpg" alt="Agra" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm font-semibold text-center">Agra</p>
      </div>
    </div>
  </Link>
  </div>
</div>


<div className="flex flex-col md:flex-row justify-between items-center my-14 border-2 rounded-lg border-gray-800 p-5">
      <div className="flex items-center">
        <img src={'/fire.jpg'} alt='fire' width={200} height={200} className="w-32 h-32 rounded-full mr-5" />
        <div className="text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row mt-5 md:mt-0">
        <input
          type="email"
          className="px-6 py-3 rounded-lg mr-5 w-full md:w-80 h-16 outline-none border border-gray-300 mb-4 md:mb-0"
          placeholder="e.g. johna@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="px-6 py-3 rounded-lg mr-5 w-full md:w-80 h-32 outline-none border border-gray-300 mb-4 md:mb-0"
          placeholder="Type your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full md:w-48 rounded-lg h-14 bg-red-500 text-xl text-white flex items-center justify-center cursor-pointer"
        >
          Notify
        </button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Header3;





