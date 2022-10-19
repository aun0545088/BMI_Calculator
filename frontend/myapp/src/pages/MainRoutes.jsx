import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "./Login";
import Signup from "./Signup";
import BmiCalc from "./BmiCalc";
import ReqAuth from "./ReqAuth";
import Logout from "./Logout";

const MainRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/bmi"
          element={
            <ReqAuth>
              <BmiCalc />
            </ReqAuth>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
