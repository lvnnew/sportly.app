import React from "react";
import "normalize.css";
import Main from "./components/Main";
import Advantages from "./components/Advantages";
import { Box } from "@mui/system";
import Opportunities from "./components/Opportunities";
import Rates from "./components/Rates";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        overflow: "hidden",
      }}
    >
      <Main />
      <Advantages />
      <Opportunities />
      <Rates />
      <Footer/>
    </Box>
  );
}

export default App;
