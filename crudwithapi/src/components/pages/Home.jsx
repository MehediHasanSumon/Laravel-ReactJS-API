import { Alert, Box, Grid, TextField, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useGetStudentDataQuery,
  useCreateStudentDataMutation,
  useDeleteStudentDataMutation,
} from "../../services/Students";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Home() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const nagivate = useNavigate();
  const getStudentData = useGetStudentDataQuery();
  const [createStudentData] = useCreateStudentDataMutation();
  const [deleteStudentData] = useDeleteStudentDataMutation();

  const [error, setError] = useState({
    status: false,
    message: "",
    type: "error",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const getData = new FormData(e.currentTarget);

    const data = {
      roll: getData.get("roll"),
      name: getData.get("name"),
      email: getData.get("email"),
    };
    if (data.email && data.roll && data.name) {
      console.log(data);
      const getResponse = await createStudentData(data);
      console.log(getResponse);
      document.getElementById("data-form").reset();
      setError({ status: true, message: "Login Success", type: "success" });
      nagivate("/");
    } else {
      setError({
        status: true,
        message: "Unable to submit data",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={5}>
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
          {error.status ? (
            <Alert severity={error.type} sx={{ mt: 3 }}>
              {error.message}
            </Alert>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12} lg={7} sx={{ px: "5px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Roll</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getStudentData.data?.map((data) => (
                  <StyledTableRow key={data.id}>
                    <StyledTableCell component="th" scope="row">
                      {data.roll}
                    </StyledTableCell>
                    <StyledTableCell>{data.name}</StyledTableCell>
                    <StyledTableCell>{data.email}</StyledTableCell>
                    <StyledTableCell>
                      <IconButton>
                        <NavLink to={`/edit/${data.id}`}>
                          <EditIcon color="success" />
                        </NavLink>
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          deleteStudentData(data.id);
                          nagivate("/");
                        }}
                      >
                        <DeleteIcon sx={{ color: "#fa5252" }} />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
