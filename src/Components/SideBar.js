import React from "react";
import Tags from "./Tags";
import RoadMap from "./RoadMap";
function SideBar() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-600 via-neutral-400 to-fuchsia-600 w-64 h-36 flex flex-col justify-center rounded-md drop-shadow-md">
        <h1 className="font-bold text-xl text-white text-center">
          Product Fedback App
        </h1>
        <h5 className="font-bold text-lg text-white text-center">
          Feedback Board
        </h5>
      </div>
      <div className="mt-8">
        <Tags />
      </div>
      <div className="mt-8">
        <RoadMap />
      </div>
    </>
  );
}

export default SideBar;
