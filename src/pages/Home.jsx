import React from "react";
// import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <div className="bg-neutral-800 h-screen">
        {/* <Navbar /> */}
        <div className="flex w-full md:h-[70%] md:px-14 md:pr-16 flex-col pt-20 md:pt-[230px] md:flex-row justify-center items-center ">
          <div className="flex w-full  md:w-[60%] justify-center items-center">
            <img
              className="flex w-3/5 md:w-[80%]"
              src="images/profile.png"
              alt="profile"
            />
          </div>

          <div className="flex flex-col w-full md:w-[70%] items-center ">
            <h1 className="sacramento text-white md:text-[115px] text-[60px] pt-11 font-medium leading-none">
              I'm Varissara
            </h1>
            <h2 className="text-brightGreen  font-light text-2xl md:text-4xl">
              FrontEnd Web Developer
            </h2>
            <div className="pt-16">
              <a
                className="m-2 text-xl text-white md:text-[30px] md:p-2 md:px-4 border-solid border-2 border-white rounded-[50%] p-1 px-2 hover:bg-gradient-to-r from-cyan-500 to-superBrightGreen hover:border-0"
                href="http://"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="http://"
                className="m-2 text-xl text-white md:text-[30px] md:p-2 md:px-4 border-solid border-2 border-white rounded-[50%] p-1 px-2 hover:bg-gradient-to-r from-cyan-500 to-superBrightGreen hover:border-0"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="http://"
                className="m-2 text-xl text-white md:text-[30px] md:p-2 md:px-4 border-solid border-2 border-white rounded-[50%] p-1 px-2  hover:bg-gradient-to-r from-cyan-500 to-superBrightGreen hover:border-0"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="mailto:varissara.wo@gmail.com"
                className="m-2 text-xl text-white md:text-[30px] md:p-2 md:px-4 border-solid border-2 border-white rounded-[50%] p-1 px-2  hover:bg-gradient-to-r from-cyan-500 to-superBrightGreen hover:border-0"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
            <button className="text-neutral-800 font-medium md:text-xl md:p-3 md:px-5 md:font-semibold bg-yellow-200 mt-12 p-2 px-8 rounded-md">
              Dowload Resume
            </button>
          </div>
        </div>
      </div>

      {/* <About /> */}
    </>
  );
};

export default Home;
