import React, { useEffect, useState } from 'react';
import FeedbackList from '../../Components/FeedbackList';
import Header from '../../Components/Header';
import Layout from '../../Layout/Layout';
import { fetchAllFeedbacks } from '../../Services/Feedback';

function Home() {
  const [feedbacks, setFeedbacks] = useState([]);

  const getFeedbacks = async () => {
    try {
      const allFeedbacks = await fetchAllFeedbacks();
      setFeedbacks(allFeedbacks);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div>
      <Layout>
        <div>
          <Header />
          <FeedbackList feedbacks={feedbacks} />
        </div>
      </Layout>
    </div>
  );
}

export default Home;
