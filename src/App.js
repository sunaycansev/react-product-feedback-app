import { Routes, Route } from 'react-router-dom';
import Parse from 'parse/dist/parse.min';
import CreateFeedback from './Pages/CreateFeedback/CreateFeedback';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Signup from './Pages/Signup/Signup';
import FeedbackDetail from './Pages/FeedbackDetail/FeedbackDetail';

function App() {
  Parse.initialize(
    process.env.REACT_APP_PARSE_APPLICATION_ID,
    process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
  );
  Parse.serverURL = process.env.REACT_APP_PARSE_HOST_URL;

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/create" exact element={<CreateFeedback />} />
      <Route path="/feedback/:id" element={<FeedbackDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
