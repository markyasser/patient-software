import React from "react";
import PersonalInfoForm from "../sections/Form/PersonalInfoForm";
import { Box, Container, Stack } from "@mui/material";
import logo from "../assets/logo.jpeg";
const PersonalInfoPage = () => (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Container>
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: 4,
          border: "1px solid #e0e0e0",
          py: 6,
          px: 4,
          boxShadow: 3,
        }}
      >
        <Box flex={1} sx={{ display: { xs: "none", md: "block" }, p: 0 }}>
          <img src={logo} alt="logo" style={{ width: "300px" }} />
        </Box>

        <Box flex={1}>
          <PersonalInfoForm />
        </Box>
      </Stack>
    </Container>
  </Box>
);

export default PersonalInfoPage;
