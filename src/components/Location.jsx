import React from "react";

const Location = ({ location }) => {
  return (
    <section className="text-white1 p-2 font-bold">
      <h2 className="flex justify-center item-center font-bold text-[20px]">{location?.name}</h2>
      <ul className="flex flex-wrap justify-center item-center mx-auto font-semibold">
        <li className=" px-2 ">Type: {location?.type}</li>
        <li className=" px-2 ">Dimension: {location?.dimension}</li>
        <li className=" px-2 " >Population: {location?.residents.length}</li>
      </ul>
    </section>
  );
};

export default Location;

// < className="flex justify-center item-center mx-auto font-semibold">
