import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineSearch,
} from "react-icons/ai";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-screen relative bg-black ">
        <img
          src="images/rajasthan.jpg"
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <nav className="w-full absolute top-0 p-5 flex justify-between text-white z-10">
        <div>
          <h1 className="text-3xl font-bold cursor-pointer">Travelone</h1>
        </div>

        <div>
          <ul className="flex space-x-5 font-bold cursor-pointer text-gray-300">
            <li className="text-black hover:text-white hover:bottom-b">HOME</li>
            <li className="text-black hover:text-white hover:bottom-b">ABOUT US</li>
            <li className="text-black hover:text-white hover:bottom-b">CONTACT US</li>
            <li className="text-black hover:text-white hover:bottom-b">HELP</li>
          </ul>

          <div className="flex items-center space-x-2 mt-5">
            <AiOutlineSearch className="text-xl cursor-pointer text-black " />

            <input
              className="bg-inherit border-b outline-0 border-black p-1 w-full text-black"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
      </nav>

      <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-0">
        <div className="text-white text-center space-y-5">
          <h2 className="text-2xl font-bold cursor-default">D I S C O V E R</h2>
          <h1 className="text-5xl font-bold cursor-default">W O R L D</h1>
          <p className="mx-10 text-gray-400 cursor-default">
          Journey Beyond the Ordinary - Discover, Explore, and Experience the World with Us!Unlock the World’s Most Spectacular Destinations – From Iconic Landmarks to Hidden Treasures, Let Your Next Adventure Begin with Unforgettable Journeys Tailored Just for You!
          </p>
        </div>

        <div className="space-x-4">
          <button className="bg-gray-300 py-2 px-5 rounded-md hover:bg-white hover:duration-300">
            Road Map
          </button>
          <button className="text-gray-300 border rounded-md py-2 px-5 hover:bg-white hover:text-black hover:duration-300">
            Book a Trip
          </button>
        </div>

        <div className="text-white flex space-x-5">
          <AiFillFacebook size={"2rem"} className="cursor-pointer" />
          <AiFillInstagram size={"2rem"} className="cursor-pointer" />
          <AiFillTwitterSquare size={"2rem"} className="cursor-pointer" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
