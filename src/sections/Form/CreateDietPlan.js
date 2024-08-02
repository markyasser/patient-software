import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  FormControl,
  TextField,
  Typography,
  Switch,
  FormControlLabel,
  Container,
} from "@mui/material";
import { useState } from "react";
import { postPersonalInfo } from "../../services/apiService";
import DietPlan from "../DietPlan/DietPlan";
import logo from "../../assets/create-plan.jpeg";

// Schemas for validation
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required"),
  gender: yup.string().required("Gender is required"),
  height: yup.number().required("Height is required"),
  weight: yup.number().required("Weight is required"),
  blood_pressure_lower: yup
    .number()
    .required("Blood Pressure (Lower) is required"),
  blood_pressure_upper: yup
    .number()
    .required("Blood Pressure (Upper) is required"),
  is_diabetic: yup.boolean().required("Diabetic is required"),
});

// Intial values for the form
const initialValues = {
  name: "",
  age: "",
  gender: "",
  height: "",
  weight: "",
  blood_pressure_lower: "",
  blood_pressure_upper: "",
  is_diabetic: false,
};

function CreateDietPlan() {
  document.title = "Create Weekly Diet Plan";

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState("form");
  const [dietPlan, setDietPlan] = useState({});

  const prepareData = (values) => {
    return {
      name: values.name,
      age: Number(values.age), // Convert to number
      gender: values.gender,
      height: Number(values.height), // Convert to number
      weight: Number(values.weight), // Convert to number
      blood_pressure_lower: Number(values.blood_pressure_lower), // Convert to number
      blood_pressure_upper: Number(values.blood_pressure_upper), // Convert to number
      is_diabetic: Boolean(values.is_diabetic), // Ensure boolean
    };
  };

  const handleFormSubmit = async (values) => {
    try {
      const dataToSend = prepareData(values);
      const res = await postPersonalInfo(dataToSend);
      console.log(res.data);
      setDietPlan(res.data);
      setCurrentPage("diet-plan");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return currentPage === "form" ? (
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
            <Stack spacing={2}>
              <div>
                <Typography component="h1" variant="h4" fontWeight={700}>
                  Let&apos;s start
                </Typography>
              </div>

              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({
                  isSubmitting,
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <Box
                    component="form"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <Stack direction="row" spacing={2}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.name) && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    </Stack>

                    <Stack direction="row" spacing={2} mt={2}>
                      <TextField
                        fullWidth
                        label="Age"
                        name="age"
                        value={values.age}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.age) && Boolean(errors.age)}
                        helperText={touched.age && errors.age}
                      />
                      <FormControl fullWidth>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select
                          labelId="gender-label"
                          label="Gender"
                          value={values.gender}
                          name="gender"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            Boolean(touched.gender) && Boolean(errors.gender)
                          }
                        >
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                        {Boolean(touched.userType) && (
                          <Typography
                            variant="body2"
                            sx={{ color: "error.main", mt: 0.5 }}
                          >
                            {errors.userType}
                          </Typography>
                        )}
                      </FormControl>
                    </Stack>

                    <Stack direction="row" spacing={2} mt={2}>
                      <TextField
                        fullWidth
                        label="Height"
                        name="height"
                        value={values.height}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          Boolean(touched.height) && Boolean(errors.height)
                        }
                        helperText={touched.height && errors.height}
                      />
                      <TextField
                        fullWidth
                        label="Weight"
                        name="weight"
                        value={values.weight}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          Boolean(touched.weight) && Boolean(errors.weight)
                        }
                        helperText={touched.weight && errors.weight}
                      />
                    </Stack>

                    <Stack direction="row" spacing={2} mt={2}>
                      <TextField
                        fullWidth
                        label="Blood Pressure (Upper)"
                        name="blood_pressure_upper"
                        value={values.blood_pressure_upper}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          Boolean(touched.blood_pressure_upper) &&
                          Boolean(errors.blood_pressure_upper)
                        }
                        helperText={
                          touched.blood_pressure_upper &&
                          errors.blood_pressure_upper
                        }
                      />
                      <TextField
                        fullWidth
                        label="Blood Pressure (Lower)"
                        name="blood_pressure_lower"
                        value={values.blood_pressure_lower}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          Boolean(touched.blood_pressure_lower) &&
                          Boolean(errors.blood_pressure_lower)
                        }
                        helperText={
                          touched.blood_pressure_lower &&
                          errors.blood_pressure_lower
                        }
                      />
                    </Stack>

                    <Stack direction="row" spacing={2} mt={2}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.is_diabetic}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="is_diabetic"
                          />
                        }
                        label="Is Diabetic"
                        error={
                          Boolean(touched.is_diabetic) &&
                          Boolean(errors.is_diabetic)
                        }
                        helperText={touched.is_diabetic && errors.is_diabetic}
                      />
                    </Stack>

                    <Button
                      disabled={isSubmitting}
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 3,
                        p: 2,
                      }}
                    >
                      {isSubmitting ? "Creating Diet Plan..." : "Create"}
                    </Button>
                  </Box>
                )}
              </Formik>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  ) : (
    <DietPlan dietPlan={dietPlan} />
  );
}

export default CreateDietPlan;
