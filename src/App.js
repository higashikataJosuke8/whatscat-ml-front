// React imports
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Helmet } from "react-helmet"

// Material UI imports
import { createTheme, ThemeProvider } from "@mui/material/styles"

// CSS imports
import "./App.css"

// Image imports
import noImagePresent from "./images/NoImage.png"

// Other imports
import "@fontsource/nunito"

// Local component imports
import ImageCapturePage from "./components/ImageCapturePage"
import ResultsPage from "./components/ResultsPage"

// Theme for the components
const theme = createTheme({
  palette: {
    primary: {
      light: "#ae52d4",
      main: "#7b1fa2",
      dark: "#4a0072",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ae52d4",
      main: "#7b1fa2",
      dark: "#4a0072",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Nunito",
    highBreedPct: {
      color: "#7b1fa2"
    },
  },
});

function App() {
  // State which stores the uploaded file
  const [catImage, setCatImage] = useState(noImagePresent);
  // State for the results
  const [finalResult, setFinalResult] = useState(null);
  // State for checking if response from whatscat-api is okay
  const [responseOk, setResponseOk] = useState(false);

  // Function for changing the catImage state
  const settingCatImage = (result) => {
    setCatImage(result)
  }

  // Function for changing the finalResult state
  const settingFinalResult = (result) => {
    setFinalResult(result)
  }

  // Function for changing the responseOk state
  const settingResponseOk = (value) => {
    setResponseOk(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Routes> 
            <Route path="/" element={
              <>
                <Helmet>
                  <title>Image Capture — WhatsCat</title>
                </Helmet>
                <ImageCapturePage catImage={catImage} settingCatImage={settingCatImage} settingFinalResult={settingFinalResult} settingResponseOk={settingResponseOk}/>
              </>
            }></Route>
            <Route path="/result" element={
              <>
                <Helmet>
                  <title>Result — WhatsCat</title>
                </Helmet>
                <ResultsPage catImage={catImage} finalResult={finalResult} responseOk={responseOk}/>
              </>
            }></Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
