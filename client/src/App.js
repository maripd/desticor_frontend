import "./App.css";
import HomePage from "./pages/HomePage";
import BucketListView from "./pages/BucketListView";
import DestinationDetails from "./pages/DestinationDetails";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import ReviewView from "./pages/ReviewView";
import { Routes, Route } from "react-router-dom";
import React from "react";
// import axios from "axios";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinationdetails:id" element={<DestinationDetails />} />
        <Route path="/bucketlistview/:id" element={<BucketListView />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
};

export default App;
