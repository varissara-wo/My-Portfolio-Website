import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <h1 className="bitter text-center md:text-left p-20 pb-8 md:pt-20 text-5xl md:text-6xl font-medium text-pink md:hidden bg-neutral-800">
        About Me
      </h1>
      <div
        id="about"
        className="md:w-full h-screen justify-center md:p-24 md:pt-28 flex flex-col md:flex-row items-center p-12 pt-1  bg-neutral-800"
      >
        <div className="md:w-[50%] flex flex-col justify-center items-center  ">
          <h1 className="md:order-1 bitter text-center md:text-left  pb-8 md:pt-1 text-5xl md:text-6xl font-medium text-pink hidden md:block">
            About Me
          </h1>
          <h2 className="md:order-3 md:pt-14 text-center   badScript font-semibold text-2xl  md:text-4xl pt-2  text-brightPurple ">
            HELLO!
          </h2>
          <p className="md:order-4 pt-5 font-light text-lg md:text-xl text-center md:pt-7 md:text-start text-superBrightBrown/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
            finibus nisi. Suspendisse potenti. Sed eu imperdiet turpis, vitae
            dapibus dolor. Praesent vel rutrum lacus.Vivamus ligula metus,
          </p>

          <img
            className="flex mt-10 rounded-md w-[90%] md:w-[60%] md:order-2 "
            src="images/profile2.jpg"
            alt="profile"
          />
        </div>

        <div className="flex pt-14  flex-col justify-center items-center md:w-[50%]">
          <h2 className="md:pb-14 badScript font-semibold text-2xl text-blue  md:text-4xl text-brightPurple">
            EDUCATION
          </h2>
          <div className="flex flex-col w-full">
            <div className="flex justify-center items-center pt-6 w-full">
              <div className="flex flex-col w-[60%] items-end pr-6">
                <h4 className="text-xl md:text-3xl font-bitter text-white/75">
                  2017-2022
                </h4>
                <h3 className=" md:text-2xl font-light text-xl text-brightPurple">
                  Kasetsart University
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  className="text-2xl md:text-5xl text-brightPurple hover:text-pink"
                  icon={faGraduationCap}
                />
                <div className="bg-brightPurple h-[75px] w-[2px] mt-3"></div>
              </div>
              <div className="flex flex-col w-[60%] pl-6">
                <h4 className="text-xl md:text-3xl font-bitter text-white/75">
                  Bachelor degree
                </h4>
                <h3 className=" md:text-2xl text-xl text-brightPurple">
                  Aerospace Engineering
                </h3>
              </div>
            </div>
            <div className="flex justify-center items-center pt-6 w-full">
              <div className="flex flex-col w-[60%] items-end pr-6">
                <h4 className="text-xl md:text-3xl font-bitter text-white/75">
                  2022
                </h4>
                <h3 className=" md:text-2xl font-light text-xl text-brightPurple">
                  TechUp Bootscamp
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  className="text-2xl md:text-5xl text-brightPurple hover:text-pink"
                  icon={faGraduationCap}
                />
                <div className="bg-brightPurple h-[75px] w-[2px] mt-3"></div>
              </div>
              <div className="flex flex-col w-[60%] pl-6">
                <h4 className="text-xl md:text-3xl font-bitter text-white/75">
                  Course Certificate
                </h4>
                <h3 className=" md:text-2xl font-light text-xl text-brightPurple">
                  Full-Stack Software Development
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
