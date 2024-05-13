
import Link from "next/link";

const Header2 = () => { 
      return (

<>
<div className="flex flex-wrap justify-center text-blue-500 items-center text-xl p-4 gap-4 md:gap-10 h-auto bg-white">
  <div className="flex items-center ">
    <Link href="/">
      <button  className="font-bold  text-sm md:text-xl text-center md:text-left focus:outline-none">Join us for Business</button>
    </Link>
  </div>
  <div className="flex items-center">
    <Link href="/">
      <button className="font-bold text-sm md:text-xl text-center md:text-left focus:outline-none">List your property</button>
    </Link>
  </div>
  <div className="flex items-center">
    <Link href="/">
      <button className="font-bold  text-sm md:text-xl text-center md:text-left focus:outline-none">Call us to Book now</button>
    </Link>
  </div>
  <div className="flex items-center">
    <Link href="/">
      <button className="font-bold  text-sm md:text-xl text-center md:text-left focus:outline-none">Book at your preference</button>
    </Link>
  </div>
</div>


</>
      );
}

export default Header2
