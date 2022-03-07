import React from "react";

function RoadMap() {
  return (
    <div className="w-64 h-36 bg-white p-4 shadow-xl rounded-lg p-5">
      <div className="flex justify-between">
        <div className="font-bold text-lg">Roadmap</div>
        <div className="text-sm text-blue-700 font-bold underline hover:cursor-pointer">
          View
        </div>
      </div>

      <div className="flex justify-between  mt-1">
        <div className="flex  items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-orange-700 mr-6"></div>
          <div className="font-semibold">Planned</div>
        </div>
        <div className="font-bold">2</div>
      </div>
      <div className="flex justify-between  mt-1">
        <div className="flex  items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-violet-700 mr-6"></div>
          <div className="font-semibold">In-Progress</div>
        </div>
        <div className="font-bold">2</div>
      </div>
      <div className="flex justify-between  mt-1">
        <div className="flex  items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-cyan-700 mr-6"></div>
          <div className="font-semibold">Planned</div>
        </div>
        <div className="font-bold">2</div>
      </div>
    </div>
  );
}

export default RoadMap;
