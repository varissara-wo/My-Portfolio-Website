import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSquareJs,
  faReact,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <>
      <div className="bg-darkPurple w-screen md:h-screen  p-16 pt-28 md:pt-[145px]">
        <div>
          {/* Main Title */}
          <div>
            <h1 className=" text-6xl bitter font-medium text-superBrightBrown">
              MY SKILLS
            </h1>
          </div>
          {/* Container */}
          <div className="pt-12">
            {/* Title */}
            <div>
              <h2 className="text-center text-4xl md:text-6xl  font-light text-white">
                Web Developer
              </h2>
            </div>
            {/* skill list */}
            <div className="flex flex-col md:flex-row items-center md:justify-between md:px-20">
              <div className="flex flex-col bg-brightYellow p-5 pt-10 mt-14 w-[300px] md:w-[30%] items-center rounded-md">
                <img className="w-[64px]" src="images/front-end.png" alt="" />
                <h2 className=" text-3xl font-semibold pt-4 text-neutral-600 ">
                  Front-End
                </h2>
                <div className="pt-5">
                  <FontAwesomeIcon
                    className="text-[30px] px-2 text-purple-400"
                    icon={faHtml5}
                  />
                  <FontAwesomeIcon
                    className="text-[30px] px-2 text-purple-400"
                    icon={faCss3}
                  />
                  <FontAwesomeIcon
                    className="text-[30px] px-2 text-purple-400"
                    icon={faSquareJs}
                  />
                  <FontAwesomeIcon
                    className="text-[30px] px-2 text-purple-400"
                    icon={faReact}
                  />
                </div>
              </div>
              <div className="flex flex-col bg-brightYellow p-5 pt-10 mt-14 w-[300px] items-center rounded-md md:w-[30%]">
                <img className="w-[64px]" src="images/database.png" alt="" />
                <h2 className=" text-3xl font-semibold pt-4 text-neutral-600 ">
                  Back-End
                </h2>
                <div className="pt-5">
                  <FontAwesomeIcon
                    className="text-[30px] px-2 text-purple-400"
                    icon={faNodeJs}
                  />
                </div>
              </div>
              <div className="flex flex-col bg-brightYellow p-5 pt-10 mt-14 w-[300px] items-center rounded-md md:w-[30%]">
                <img className="w-[64px]" src="images/ui-ux.png" alt="" />
                <h2 className=" text-3xl font-semibold pt-4 text-neutral-600 ">
                  UI/UX Design
                </h2>
                <div className="pt-5">
                  <FontAwesomeIcon
                    className="text-[30px] px-2 text-purple-400"
                    icon={faFigma}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
