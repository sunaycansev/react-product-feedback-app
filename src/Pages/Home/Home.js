import { useEffect, useState } from 'react';
import Parse from 'parse/dist/parse.min';
import FeedbackList from '../../Components/FeedbackList';
import Header from '../../Components/Header';
import Layout from '../../Layout/Layout';
import { fetchAllFeedbacks } from '../../Services/Feedback';
import { fetchCurrentUser } from '../../Services/User';

function Home() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [user, setUser] = useState(null);
  const logout = async () => {
    try {
      await Parse.User.logOut();
      setUser(null);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const currentUser = fetchCurrentUser();
    setUser(currentUser);
    debugger;
    console.log(user);
  }, [user]);

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
          <Header user={user} logout={logout} />
          <FeedbackList feedbacks={feedbacks} />
        </div>
      </Layout>
    </div>
  );
}

export default Home;
