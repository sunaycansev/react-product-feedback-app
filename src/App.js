import { Routes, Route } from 'react-router-dom'
import CreateFeedback from './Pages/CreateFeedback/CreateFeedback'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'
import Signup from './Pages/Signup/Signup'

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/create" exact element={<CreateFeedback />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
