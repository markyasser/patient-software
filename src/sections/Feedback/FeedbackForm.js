import React, { useState } from "react";
// import axios from "axios";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState(0);

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("/api/feedback", { score: feedback });
    alert("Feedback submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Feedback Score (1-5):
        <input
          type="number"
          min="1"
          max="5"
          value={feedback}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
