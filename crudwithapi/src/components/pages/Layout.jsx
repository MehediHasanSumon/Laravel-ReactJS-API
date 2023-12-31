import { CssBaseline } from "@mui/material";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
