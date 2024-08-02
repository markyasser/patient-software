import React, { useState, useEffect } from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { getStatistics } from "../../services/apiService"; // Ensure the import matches the function name
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const Statistics = () => {
  const [statistics, setStatistics] = useState({});
  const [error, setError] = useState(null); // To handle and display errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStatistics();
        console.log("Statistics response:", response.data);
        setStatistics(response.data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setError("Failed to fetch statistics data.");
      }
    };

    fetchData();
  }, []);

  return error ? (
    <p style={{ color: "red" }}>{error}</p>
  ) : (
    <Container>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Statistics
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box flex={1} display="flex" justifyContent="center">
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: statistics.diabeticMales,
                    label: "Diabetic Males",
                  },
                  {
                    id: 1,
                    value: statistics.diabeticFemales,
                    label: "Diabetic Females",
                  },
                  {
                    id: 2,
                    value: statistics.nonDiabetic,
                    label: "Non Diabetic",
                  },
                ],
              },
            ]}
            width={600}
            height={300}
          />
        </Box>
        <Stack direction="column" spacing={2} flex={1}>
          {statistics.heightHistogram && (
            <BarChart
              width={500}
              height={300}
              series={[
                {
                  data: statistics.heightHistogram.map((item) => item[1]),
                  label: "Heights",
                  id: "uvId",
                  stack: "total",
                  color: "#3f51b5",
                },
              ]}
              xAxis={[
                {
                  data: statistics.heightHistogram.map((item) =>
                    item[0].toString()
                  ),
                  scaleType: "band",
                },
              ]}
            />
          )}
          {statistics.weightHistogram && (
            <BarChart
              width={500}
              height={300}
              series={[
                {
                  data: statistics.weightHistogram.map((item) => item[1]),
                  label: "Weights",
                  id: "uvId",
                  stack: "total",
                  color: "red",
                },
              ]}
              xAxis={[
                {
                  data: statistics.weightHistogram.map((item) =>
                    item[0].toString()
                  ),
                  scaleType: "band",
                },
              ]}
            />
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Statistics;
