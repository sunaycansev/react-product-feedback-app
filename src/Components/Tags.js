import React from "react";

function Tags() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <div className="w-64 h-36 bg-white p-4 shadow-xl rounded-lg flex justify-start">
      <div className="flex flex-wrap justify-center items-center">
        {categories.map((category) => (
          <button
            key={category}
            className="p-0.5 px-3 rounded-lg bg-sky-100 mx-2 my-1 text-sm text-blue-500 font-bold h-7 hover:bg-blue-200 hover:cursor-pointer ease-in-out duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tags;
