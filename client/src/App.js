import './App.css'
import HomePage from './pages/HomePage'
import BucketListView from './pages/BucketListView'
import DestinationDetails from './pages/DestinationDetails'
import LandingPage from './pages/LandingPage'
import LoginView from './pages/LoginView'
import RegistrationForm from './pages/RegistrationForm'
import ReviewView from './pages/ReviewView'
import { Routes, Route } from 'react-router-dom'
import React from 'react'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinationdetails:id" element={<DestinationDetails />} />
        <Route path="/bucketlistview:id" element={<BucketListView />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/loginview" element={<LoginView />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/review:id" element={<ReviewView />} />
      </Routes>
    </div>
  )
}

export default App
