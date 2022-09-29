import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCode,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Navbar2 = () => {
  return (
    <div className="md:hidden sticky bottom-0 z-50 bg-neutral-800  h-[80px] ">
      <div className="flex h-full justify-between items-center p-5 px-20">
        <a className="flex flex-col" href="/">
          <FontAwesomeIcon
            className="text-[25px] text-white/50 hover:text-superBrightGreen"
            icon={faHouse}
          />
          <p className="text-white/75 font-normal pt-1">Home</p>
        </a>
        <a className="flex flex-col" href="/about">
          <FontAwesomeIcon
            className="text-[25px]  text-white/50 hover:text-superBrightGreen"
            icon={faUser}
          />
          <p className="text-white/75 font-normal pt-1">About</p>
        </a>
        <a className="flex flex-col" href="/skills">
          <FontAwesomeIcon
            className="text-[25px]  text-white/50 hover:text-superBrightGreen"
            icon={faCode}
          />
          <p className="text-white/75 font-normal pt-1">Skills</p>
        </a>
        <a className="flex flex-col" href="/">
          <FontAwesomeIcon
            className="text-[25px] text-white/50 hover:text-superBrightGreen"
            icon={faBriefcase}
          />
          <p className="text-white/75 font-normal pt-1">Project</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
