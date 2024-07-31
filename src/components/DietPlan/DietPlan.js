import React, { useEffect, useState } from "react";
// import axios from "axios";

const DietPlan = () => {
  const [dietPlan, setDietPlan] = useState("");

  useEffect(() => {
    const fetchDietPlan = async () => {
      //   const response = await axios.get("/api/diet-plan");
      setDietPlan(response.data.plan);
    };
    fetchDietPlan();
  }, []);

  return (
    <div>
      <h2>Your Diet Plan</h2>
      <p>{dietPlan}</p>
    </div>
  );
};

export default DietPlan;
