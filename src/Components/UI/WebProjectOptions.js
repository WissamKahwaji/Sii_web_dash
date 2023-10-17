import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBuildingGear, BsWindowSidebar, BsWindowStack } from "react-icons/bs";
const WebProjectOptions = ({
  titleFirst,
  titleSecond,
  titleThird,
  toFirst,
  toSecond,
  toThird,
}) => {
  return (
    <ul
      className={`flex items-center flex-col md:flex-row h-screen justify-center`}
    >
      <li
        className={`mx-4 underline flex items-center text-sm md:text-3xl md:mb-0 mb-4`}
      >
        <a href={toFirst} target="_blank" rel="noreferrer">
          {titleFirst}
        </a>
        <AiOutlineGlobal className={`ml-1`} />
      </li>
      <li
        className={`mx-4 underline flex items-center text-sm md:text-3xl md:mb-0 mb-4`}
      >
        <a href={toSecond} target="_blank" rel="noreferrer">
          {titleSecond}
        </a>
        <BsWindowStack className={`ml-1`} />
      </li>
      <li
        className={`mx-4 underline flex items-center text-sm md:text-3xl md:mb-0 mb-4`}
      >
        <a href={toThird} target="_blank" rel="noreferrer">
          {titleThird}
        </a>
        <BsWindowSidebar className={`ml-1`} />
      </li>
    </ul>
  );
};

export default WebProjectOptions;
