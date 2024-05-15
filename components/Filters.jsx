
"use client";
import axios from "axios";
import {  useEffect, useState } from "react";


const Filters = ({price , setPrice , handlePrice , checkedList, setCheckedList})=>{
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get(`/api/facilities`);
      if (data?.facilities) {
        setList(data.facilities);
      }
    } catch (err) {
      console.log(err);
    }
  };



    const handleCheckList = async (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setCheckedList(newList);
      return;
    }
    newList = newList.filter((i) => i !== e.target.value);
    setCheckedList(newList);
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <>
    <div className="border-2 border-blue-500 bg-blue-100 rounded-md ml-4 mt-5 py-10 px-3 md:flex md:flex-wrap md:justify-between">
  <div className="flex flex-wrap items-center border-2 border-blue-500  p-1 ">
    <label htmlFor="price" className="text-xl  mr-3 font-bold">
      Price :{" "}
    </label>
    <input
          type="range"
          name="price"
          id="price"
          min={0}
          max={3500}
          onChange={(e) => setPrice(e.target.value)} 
          defaultValue={price ? price : 0}
          className="w-full md:w-32 h-6"
          />
    <span className="ml-3">&#8377; {price? price : ''}</span>  
  </div>
  <div className="flex flex-wrap items-center ">
  <button className="w-40 h-10 bg-blue-500 rounded-lg cursor-pointer my-3"
            onClick={handlePrice}>Search</button>
  </div>
  <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl    font-bold my-3">
      Filter by facilities :
  </h3>
  {
    <div className="space-y-3">
    {list?.map((e) => (
      <div key={e} className="flex items-center">
        <input
          type="checkbox"
          name={e}
          id={e}
          value={e}
          className="w-5 h-5 mr-3"
          onChange={handleCheckList}
        />
        <label htmlFor={e} className="text-lg">{e}</label>
      </div>
    ))}
  </div>
  }
</div>;
    </>
  );
};

export default Filters;
