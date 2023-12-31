import { Alert, Box, TextField, Button } from "@mui/material";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  useUpdateStudentDataMutation,
  useGetOneDataQuery,
} from "../../services/Students";
import { useState, useEffect } from "react"; // Import useEffect

function EditStudent() {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "error",
  });
  const { id } = useParams();
  const { data, isLoading } = useGetOneDataQuery(id);
  const [student, setStudent] = useState({
    roll: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    if (!isLoading) {
      setStudent({
        roll: data.userData.roll,
        name: data.userData.name,
        email: data.userData.email,
      });
    }
  }, [data, isLoading]);

  const handleChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const [putUserData] = useUpdateStudentDataMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getData = new FormData(e.currentTarget);

    const formData = {
      roll: getData.get("roll"),
      name: getData.get("name"),
      email: getData.get("email"),
    };

    if (formData.email && formData.roll && formData.name) {
      const { data: updatedData, error } = await putUserData({
        userId: id,
        ...formData,
      });

      if (error) {
        setError({
          status: true,
          message: "Unable to submit data",
          type: "error",
        });
      } else {
        console.log(updatedData); // Log the updated data
        document.getElementById("data-form").reset();
        setError({ status: true, message: "Update Success", type: "success" });

        navigate("/");
      }
    } else {
      setError({
        status: true,
        message: "Please fill in all fields",
        type: "error",
      });
    }
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <>
      <Box
        sx={{
          border: "1px solid #f2f2f2",
          width: "500px",
          padding: "10px",
          margin: "auto",
        }}
      >
        <Box
          component="form"
          noValidate
          sx={{ margin: "5px" }}
          id="data-form"
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            type="number"
            id="roll"
            name="roll"
            label="Roll"
            variant="outlined"
            value={student.roll}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={student.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            value={student.email}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          Back to Home
        </NavLink>
        {error.status ? (
          <Alert severity={error.type} sx={{ mt: 3 }}>
            {error.message}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}

export default EditStudent;
