import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Typography } from "@mui/material";
import FeedBack from "./FeedBack";

const columns = [
  {
    field: "day",
    headerName: "Day",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "breakfast",
    headerName: "Breakfast",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "lunch",
    headerName: "lunch",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "dinner",
    headerName: "Dinner",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
];
const DietPlan = ({ dietPlan }) => {
  const rows = dietPlan.weeklyPlan.map((day, idx) => ({
    id: idx,
    day: day.day,
    breakfast: day.breakfast.map((item) => item.name).join(", "),
    lunch: day.lunch.map((item) => item.name).join(", "),
    dinner: day.dinner.map((item) => item.name).join(", "),
  }));

  return (
    <Container sx={{ my: 8 }}>
      <Typography component="h1" variant="h4" fontWeight={700}>
        Your Weekly Diet Plan
      </Typography>
      <FeedBack />
      <DataGrid
        rowSelection={false}
        autoHeight
        rows={rows}
        columns={columns}
        autoPageSize
      />
    </Container>
  );
};

export default DietPlan;
