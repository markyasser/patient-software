import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";

const HealthInfoForm = () => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    diseases: "",
    bloodPressure: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("/api/health-info", formData);
    history.push("/diet-plan");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Weight (kg):
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Height (cm):
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Diseases:
        <input
          type="text"
          name="diseases"
          value={formData.diseases}
          onChange={handleChange}
        />
      </label>
      <label>
        Blood Pressure:
        <input
          type="text"
          name="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HealthInfoForm;
