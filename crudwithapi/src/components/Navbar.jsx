import { Typography, Box } from "@mui/material";
function Navbar() {
  return (
    <>
      <Box
        component="div"
        sx={{
          padding: "10px",
          backgroundColor: "purple",
          color: "#fff",
          textAlign: "center",
          marginBottom: "5px",
        }}
      >
        <Typography variant="h3">CRUD With API</Typography>
      </Box>
    </>
  );
}

export default Navbar;
