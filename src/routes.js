import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import HealthInfoPage from "./pages/HealthInfoPage";
import DietPlanPage from "./pages/DietPlanPage";
import FeedbackPage from "./pages/FeedbackPage";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/personal-info" element={<PersonalInfoPage />} />
      <Route path="/health-info" element={<HealthInfoPage />} />
      <Route path="/diet-plan" element={<DietPlanPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
