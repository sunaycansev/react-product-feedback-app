import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleFeedback } from '../../Services/Feedback';

function FeedbackDetail() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const getFeedback = async () => {
      try {
        const data = await getSingleFeedback(id);

        setFeedback(data.toJSON());
      } catch (e) {
        console.log(e);
      }
    };
    getFeedback();
  }, [id]);

  return (
    <div>
      <div>{feedback.title}</div>
      <div>{feedback.category}</div>
      <div>{feedback.upvotes}</div>
      <div>{feedback.details}</div>
    </div>
  );
}

export default FeedbackDetail;
