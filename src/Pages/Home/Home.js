import React from 'react'
import FeedbackList from '../../Components/FeedbackList'
import Header from '../../Components/Header'
import Layout from '../../Layout/Layout'

function Home() {
  return (
    <div>
      <Layout>
        <div>
          <Header />
          <FeedbackList />
        </div>
      </Layout>
    </div>
  )
}

export default Home
