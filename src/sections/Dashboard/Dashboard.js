import React, { useState, useEffect } from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { getStatistics } from "../../services/apiService";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Rating from "@mui/material/Rating";

const Dashboard = () => {
  const [statistics, setStatistics] = useState({});
  const [rating, setRating] = useState({});
  const [error, setError] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStatistics();
        console.log("Statistics response:", response.data);
        setStatistics(response.data.statistics);
        setRating(response.data.rating);
        setValue(response.data.rating.averageRating);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setError("Failed to fetch statistics data.");
      }
    };

    fetchData();
  }, []);

  // Convert histograms to arrays of [label, value]
  const convertHistogram = (histogram) =>
    Object.entries(histogram).map(([key, value]) => [key, value]);

  return error ? (
    <p style={{ color: "red" }}>{error}</p>
  ) : (
    <Container>
      <Typography variant="h3">Rating</Typography>
      <Typography variant="h6">by {rating.totalFeedbacks} users</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically if needed
          "& > legend": { mt: 2 },
        }}
        mb={2}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center Rating component horizontally
            width: "100%", // Ensure it uses full width to align properly
          }}
        >
          <Rating
            name="read-only-feedback"
            value={value}
            readOnly
            size="large"
          />
        </Box>
      </Box>

      {/* Statistics Section */}
      <Typography variant="h3" sx={{ mb: 4, mt: 4 }}>
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
                  data: convertHistogram(statistics.heightHistogram).map(
                    (item) => item[1]
                  ),
                  label: "Heights",
                  id: "uvId",
                  stack: "total",
                  color: "#3f51b5",
                },
              ]}
              xAxis={[
                {
                  data: convertHistogram(statistics.heightHistogram).map(
                    (item) => item[0]
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
                  data: convertHistogram(statistics.weightHistogram).map(
                    (item) => item[1]
                  ),
                  label: "Weights",
                  id: "uvId",
                  stack: "total",
                  color: "red",
                },
              ]}
              xAxis={[
                {
                  data: convertHistogram(statistics.weightHistogram).map(
                    (item) => item[0]
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

export default Dashboard;
