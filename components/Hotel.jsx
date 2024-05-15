import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <>
   <div className=" border-2 border-blue-500 rounded-lg h-auto bg-blue-100">
      <div className="flex flex-wrap items-center lg:gap-6 ml-5  p-3">
        <Image
          src={e?.banner}
          alt="hotel"
          width={400}
          height={400}
          className=" w-96 h-60 border-2 border-blue-500 rounded-lg"
        />
        <div className=" flex flex-wrap lg:gap-5  mt-1">
          {e
            ? e.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={300}
                    height={300}
                    className="border-2 border-blue-500 rounded-lg lg:h-60 lg:w-27 sm:h-24 sm:w-24 object-cover "
                  />
                );
              })
            : ""}
        </div>
        <div className="flex flex-wrap sm:m-10 h-auto   ">
  <h2 className="font-bold text-2xl sm:text-3xl line-clamp-1">{e?.name}</h2>
  <p className="text-base sm:text-lg text-justify  ">{e?.description}</p>
  <div className="text-lg sm:text-2xl ">
    <span className="font-bold">Facilities:</span>
    <ul className="flex flex-wrap">
      {e
        ? e.facilities?.map((ele) => {
            return (
              <li key={ele.name} className="mr-5 mb-3 flex items-center">
                <span>
                  <Image
                    src={ele.img}
                    alt="hotel"
                    width={200}
                    height={200}
                    className=" w-8 h-8 rounded-full"
                  />
                </span>
                <span className="ml-2 text-sm sm:text-base">{ele.name}</span>
              </li>
            );
          })
        : ""}
    </ul>
  </div>
  <div className="flex items-center">
    <button className="w-40 sm:w-60 h-10 sm:h-12 rounded-lg bg-blue-400 text-base sm:text-lg">
      Price: &#8377; {e?.price}
    </button>
    <Link
      href={`/hotels/${e?._id}`}
      className="text-base sm:text-xl font-bold text-red-600 ml-5 sm:ml-10"
    >
      See Details
    </Link>
  </div>
      </div>
        
      </div>
    </div>
    </>
  );
};

export default Hotel;


    