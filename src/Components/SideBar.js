import React from 'react'
import Tags from './Tags'
import RoadMap from './RoadMap'
function SideBar() {
  return (
    <div className="flex lg:flex-col justify-center items-center  ">
      <div className="hidden md:block  h-40 lg:w-64 bg-gradient-to-r from-violet-500 shadow-lg to-fuchsia-400  flex flex-col justify-center rounded-md drop-shadow-md mt-3 mr-2">
        <h1 className="font-bold text-lg text-white text-center">
          Product Fedback App
        </h1>
        <h5 className="font-bold text-lg text-white text-center">
          Feedback Board
        </h5>
      </div>
      <div className=" mt-3 lg:mt-8 mr-3">
        <Tags />
      </div>
      <div className="mt-3 lg:mt-8 mr-3">
        <RoadMap />
      </div>
    </div>
  )
}

export default SideBar
