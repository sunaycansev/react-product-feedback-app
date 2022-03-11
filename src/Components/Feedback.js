import React from 'react'
import { ChevronUpIcon, ChatIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

function Feedback({ feedback }) {
  const { title, details, category } = feedback.toJSON()
  return (
    <Link to="/">
      <div className="bg-white flex p-5 rounded-lg transition ease-in duration-300 hover:translate-y-1 shadow-md my-3">
        <div className="upvote flex flex-col justify-center items-center bg-gray-100 rounded-2xl p-2 mr-5">
          <div className="icon">
            <ChevronUpIcon className="w-7 h-7 text-blue-400 " />
          </div>
          <div className="count font-bold">1</div>
        </div>
        <div className="right flex justify-between">
          <div className="flex ">
            <div className="content flex flex-col mx-2">
              <div className="title">
                <h1 className="font-bold text-lg">{title}</h1>
              </div>
              <div className="para">
                <p>{details}</p>
              </div>
              <div className="tags mt-3">
                <button className=" px-4  rounded-lg bg-sky-100 mx-2  text-sm text-blue-500  h-8 hover:bg-blue-200 hover:cursor-pointer ease-in-out duration-300">
                  {category}
                </button>
              </div>
            </div>
            <div className="comment flex  justify-center items-center">
              <div className="icon">
                <ChatIcon className="w-7 h-7 text-gray-400" />
              </div>
              <div className="count font-bold">1</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Feedback
