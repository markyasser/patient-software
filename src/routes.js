import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import HealthInfoPage from "./pages/HealthInfoPage";
import DietPlanPage from "./pages/DietPlanPage";
import FeedbackPage from "./pages/FeedbackPage";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/personal-info" component={PersonalInfoPage} />
      <Route path="/health-info" component={HealthInfoPage} />
      <Route path="/diet-plan" component={DietPlanPage} />
      <Route path="/feedback" component={FeedbackPage} />
    </Switch>
  </Router>
);

export default Routes;
