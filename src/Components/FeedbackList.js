import Feedback from './Feedback';

function FeedbackList({ feedbacks }) {
  console.log('feedbacks', feedbacks);
  return (
    <div className="mt-3">
      {feedbacks.map((feedback) => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}

export default FeedbackList;
