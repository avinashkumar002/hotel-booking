'use client'
import Image from "next/legacy/image"
import Link from "next/link"

const Header4 = () => {
  return (
    <>
      <h2 className="text-3xl md:text-3xl md:text-left lg:text-4xl text-center font-bold tracking-wider font-dream text-secondary">Trending Destinations</h2>
      <p className="text-sm md:text-base md:text-left text-center font-medium text-secondary">Most popular choices for travelers in India</p>
    
    
    <div className="flex flex-wrap justify-between">
  <div className="m-4 md:m-10 border-2 rounded-lg w-full md:w-48 h-60 border-gray-800">
  <Link href="#">
    <div className="block w-full h-full relative">
      <Image src="/delhi.jpg" alt="Delhi" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm font-semibold text-center">Delhi</p>
      </div>
    </div>
  </Link>
  </div>
  <div className="m-4 md:m-10 border-2 rounded-lg w-full md:w-48 h-60 border-gray-800">
  <Link href="#">
    <div className="block w-full h-full relative">
      <Image src="/jaipur.jpg" alt="Delhi" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm font-semibold text-center">Jaipur</p>
      </div>
    </div>
  </Link>
  </div>
  <div className="m-4 md:m-10 border-2 rounded-lg w-full md:w-48 h-60 border-gray-800">
  <Link href="#">
    <div className="block w-full h-full relative">
      <Image src="/amritsar.jpg" alt="Delhi" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm font-semibold text-center">Amritsar</p>
      </div>
    </div>
  </Link>
  </div>
  <div className="m-4 md:m-10 border-2 rounded-lg w-full md:w-48 h-60 border-gray-800">
  <Link href="#">
    <div className="block w-full h-full relative">
      <Image src="/agra.jpg" alt="Delhi" layout="fill" objectFit="cover" />
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
    <div className="flex mt-5 md:mt-0">
        <input type="email" className="px-6 py-3 rounded-lg mr-5 w-full md:w-80 h-16 outline-none border border-gray-300" placeholder="e.g. johna@gmail.com" />
        <button type="submit" className="w-full md:w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer">Notify</button>
    </div>
</div>
</>
  )
}

export default Header4
