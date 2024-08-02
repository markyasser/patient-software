import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DietPlanPage from "./pages/DietPlanPage";
import FeedbackPage from "./pages/FeedbackPage";
import StatisticsPage from "./pages/StatisticsPage";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/create-diet-plan" element={<DietPlanPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/" element={<StatisticsPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
