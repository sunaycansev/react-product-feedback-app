import React from 'react'

function Tags() {
  const categories = ['All', 'UI', 'UX', 'Bug', 'Enhancement', 'Feature']
  return (
    <div className=" bg-white lg:py-5 py-3 shadow-xl rounded-lg flex justify-start h-40 lg:w-64 ">
      <div className="flex flex-wrap justify-center items-center">
        {categories.map((category) => (
          <button
            key={category}
            className=" px-3  lg:px-4 lg:mb-2 mt-0  rounded-lg bg-sky-100 mx-0.5 lg:mx-2   text-sm text-blue-500  h-8 hover:bg-blue-200 hover:cursor-pointer ease-in-out duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tags
