import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import Feedback from '../../Components/Feedback';
import { getSingleFeedback } from '../../Services/Feedback';

function FeedbackDetail() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const getFeedback = async () => {
      try {
        const data = await getSingleFeedback(id);

        setFeedback(data);
      } catch (e) {
        console.log(e);
      }
    };
    getFeedback();
  }, [id]);

  // TODO add loading state

  if (!feedback) {
    return 'loading';
  }

  return (
    <div className="page flex justify-center items-center mt-10">
      <div className="container flex flex-col justify-center px-10   bg-blue-300">
        <div className="back">
          <Link to="/">
            <div className="back my-10  text-center font-extrabold text-xl flex justify-center items-center transition ease-in-out duration-500 hover:underline hover:cursor-pointer hover:translate-y-1 hover:text-fuchsia-600 ">
              <ArrowLeftIcon className="w-5 h-5 mr-3" />
              <span>Go back</span>
            </div>
          </Link>
        </div>
        <div className="content">
          <div className="feedback">
            <Feedback feedback={feedback} />
          </div>
          <div className="comments bg-white rounded-lg shadow-md my-3 p-8">
            <div className="heading">0 Comments</div>
            <div className="comments">1</div>
          </div>
          <div className="add-comment bg-white rounded-lg shadow-md my-3 p-8">
            <div className="add-comment_heading mb-3 font-semibold text-lg">
              Add comment
            </div>
            <div className="add-comment_textarea">
              <textarea
                placeholder="Type your comment here..."
                rows={4}
                name="details"
                id="details"
                className="transition ease-in duration-300 bg-zinc-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="add-comment_bottom_container flex justify-between items-center mt-3">
              <div className="letter-count">250 characters left</div>
              <div className="submit-btn">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition duration-300 shadow-sm text-white bg-fuchsia-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetail;
