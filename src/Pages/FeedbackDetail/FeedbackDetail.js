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
          <div className="comments">a</div>
          <div className="add-comment">
            <div className="add-comment_heading">a</div>
            <div className="add-comment_textarea">a</div>
            <div className="add-comment_bottom_container">
              <div className="letter-count">a</div>
              <div className="submit-btn">a</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetail;
