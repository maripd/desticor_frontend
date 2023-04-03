import "./App.css";
import Homepage from "./pages/Homepage";
import BucketListView from "./pages/BucketListView";
import DestinationDetails from "./pages/DestinationDetails";
import LandingPage from "./pages/LandingPage";
import LoginView from "./pages/LoginView";
import RegistrationForm from "./pages/RegistrationForm";
import ReviewView from "./pages/ReviewView";
import { Routes, Route } from "react-router-dom";
import React from "react";
import axios from "axios";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destinationdetails:id" element={<DestinationDetails />} />
        <Route path="/bucketlistview:id" element={<BucketListView />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/loginview" element={<LoginView />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/review:id" element={<ReviewView />} />
      </Routes>
    </div>
  );
};

export default App;
