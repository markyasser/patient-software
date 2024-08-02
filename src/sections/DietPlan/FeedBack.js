import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { postFeedback } from "../../services/apiService";

export default function FeedBack() {
  const [value, setValue] = React.useState(2);

  const handleSubmit = async () => {
    try {
      const res = await postFeedback({ feedback: value });
      if (res.data["status"] === "success") {
        alert(`Feedback submitted with a rating of ${value}`);
      } else {
        alert(`Failed to submit feedback. Please try again.`);
      }
    } catch (error) {
      alert(`Server error. Please try again.`);
    }
  };
  return (
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
      <Typography component="legend">Feedback</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center Rating component horizontally
          width: "100%", // Ensure it uses full width to align properly
        }}
      >
        <Rating
          name="feedback"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          size="large"
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Submit Feedback
      </Button>
    </Box>
  );
}
