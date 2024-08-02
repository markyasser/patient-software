import React, { useState, useEffect } from "react";
import { getStatistics } from "../../services/apiService"; // Ensure the import matches the function name

const Statistics = () => {
  const [avgWeight, setAvgWeight] = useState(0);
  const [avgHeight, setAvgHeight] = useState(0);
  const [error, setError] = useState(null); // To handle and display errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStatistics();
        console.log("Statistics response:", response.data);
        setAvgWeight(response.data.averageWeight);
        setAvgHeight(response.data.averageHeight);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setError("Failed to fetch statistics data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <p>Average Weight: {avgWeight}</p>
          <p>Average Height: {avgHeight}</p>
        </>
      )}
    </div>
  );
};

export default Statistics;
