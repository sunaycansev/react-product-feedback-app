import { useState } from 'react';
import { ChevronUpIcon, ChatIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Parse from 'parse/dist/parse.min';

function Feedback({ feedback }) {
  const { title, details, category, upvotes } = feedback.toJSON();

  const [currentVoteValue, setCurrentVoteVaue] = useState(0);
  console.log(currentVoteValue);

  const toggleUpvote = async (id, payload) => {
    const user = Parse.User.current();
    if (user) {
      const Feedback = new Parse.Object('Feedback');
      Feedback.set('objectId', id);
      Feedback.set('upvotes', payload);
      console.log('clicked togle');

      try {
        await Feedback.save();
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('login ol');
    }
  };
  // const toggleFeedbackUpvote(id){
  //   const isUpvoted =
  // }
  return (
    <Link to={`/feedback/${feedback.id}`}>
      <div className="bg-white relative flex p-5 rounded-lg transition ease-in duration-300 hover:translate-y-1 shadow-md my-3">
        <div
          onClick={() => toggleUpvote(feedback.id, true)}
          className="upvote flex-grow-1 flex flex-col justify-center items-center bg-gray-100 rounded-2xl p-2 mr-5"
        >
          <div className="icon">
            <ChevronUpIcon className="w-7 h-7 text-blue-400 " />
          </div>
          <button type="button" className="count font-bold">
            {upvotes}
          </button>
        </div>
        <div className="right flex justify-between ">
          <div className="content  flex-col mx-2 ">
            <div className="title">
              <h1 className="font-bold text-lg">{title}</h1>
            </div>
            <div className="para">
              <p>{details}</p>
            </div>
            <div className="tags mt-3">
              <button
                type="button"
                className=" px-4  rounded-lg bg-sky-100 mx-2  text-sm text-blue-500  h-8 hover:bg-blue-200 hover:cursor-pointer ease-in-out duration-300"
              >
                {category}
              </button>
            </div>
          </div>
        </div>
        <div className="comment flex  justify-center items-center absolute right-5 top-1/2 ">
          <div className="icon">
            <ChatIcon className="w-7 h-7 text-gray-400" />
          </div>
          <div className="count font-bold">{upvotes}</div>
        </div>
      </div>
    </Link>
  );
}

export default Feedback;
