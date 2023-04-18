import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState();

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App  min-h-screen bg-cover grid place-content-center font-fira-code mx-auto">
      <header className=" bg-[url('/images/background_header.png')] w-full h-full max-h-screen bg-cover object-cover items-start mx-auto">
        <img className=" h-64 md:h-80 lg:h-100 xl:h-150 mx-auto object-cover w-full" src="/images/imah1.png" alt="" />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center item-center mx-auto">
            <input
              id="locationId"
              placeholder="Type a location Id..."
              className="border-2 border-gray50 bg-dark-blue w-40 text-gray20 "
              type="text"
            />
            <button className="border-2 border-gray50 bg-violet text-white1">
              Search <i className="bx bx-search text-gray20 p-1 text-center"></i>{" "}
            </button>
          </div>
          <h2 className="flex justify-center item-center text-gray50 p-2 text-bold text-[16px] mx-auto">
            Welcome to the crazy universe!
          </h2>
        </form>
        <Location location={location} />
      </header>
      <section className="bg-[url('/images/background_page.png')] w-full h-full object-cover">
      <ResidentList location={location} />
      </section>
    </div>
  );
}

export default App;


// bg-[url('/images/background_header.png')]