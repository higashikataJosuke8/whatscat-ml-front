// THINGS TO DO
// Fit image into a container
// Loading screen
// Dialog before submit
// Fixing text results align in Result page
// A way to go back to the home page

// React imports
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// Material UI imports
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'

// Other imports
import logo from "./images/cat-silhoutte.png"
import '@fontsource/nunito'

// Local component imports
import Header from './components/Header'
import ButtonOutlined from './components/ButtonOutlined'
import ButtonContained from './components/ButtonContained'
import CatBreedResult from './components/CatBreedResult'
import { pink } from '@mui/material/colors'

// Changing primary and secondary colors
const theme = createTheme({
  palette: {
    primary: {
      light: '#af52d5',
      main: '#7c1fa3',
      dark: '#4b0073',
      contrastText: '#fff',
    },
    secondary: {
      light: '#af52d5',
      main: '#7c1fa3',
      dark: '#4b0073',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Nunito',
  },
});

function App() {
  // states
  const [catImage, setCatImage] = useState(logo)
  const [catImageUploaded, setCatImageUploaded] = useState(true)

  // variables
  const catBreed = 'tuxedo'
  
  // image handler (for responsive image uploads), also used for knowing whether a cat image is uploaded already
  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if(reader.readyState === 2){
        setCatImage(reader.result)
        setCatImageUploaded(false)
      } 
    }
    reader.readAsDataURL(e.target.files[0])

  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Routes> 
            <Route path='/' element={
              <>
                {/* Image Capture screen */}
                <Header title='Image Capture' />
                <Container maxWidth="md" 
                           sx={{
                              my: 5,
                           }}
                >
                  <Grid container 
                        spacing={2} 
                        justifyContent="center"
                        alignItems="center"
                  >
                    <Grid item xs={9} md={10} textAlign={"center"}>
                      <img src={catImage} alt="displaying cat" id="img" style={{ width: "100%", height: "auto" }} />
                    </Grid>
                    <Grid item xs={9} md={5} textAlign={"center"}>
                      <ButtonOutlined inputType='file' captureType='user' acceptType='image/*' onChange={imageHandler} buttonText='Capture Image' />          
                    </Grid>
                    <Grid item xs={9} md={5} textAlign={"center"}>
                      <ButtonOutlined inputType='file' onChange={imageHandler} buttonText='Upload Image'/>
                    </Grid>
                    <Grid item xs={9} md={10} textAlign={"center"}>
                    <ButtonContained inputType='submit' buttonText='Submit' imageUploaded={catImageUploaded}/>
                    </Grid>
                  </Grid>
                  
                </Container>
              </>
            }></Route>
            <Route path='/result' element={
              <>
                {/* Result screen */}
                <Header title='Result' hasLeftIcon={true}/>
                <Container maxWidth="md"
                           sx={{
                              my: 5,
                           }}
                >
                  <Grid container
                        spacing={2} 
                        justifyContent="center"
                        alignItems="center"
                  >
                    <Grid item xs={12} textAlign={"center"}>
                      <img src={catImage} alt="displaying cat" id="img"/>
                    </Grid>
                    <Grid item xs={12} textAlign={"center"}>
                      <Typography variant="body1">
                        <p>This cat is a {catBreed}</p>
                        <Typography variant="caption">
                          <Link to='/' style={{ textDecoration: 'none' }}><p>TRY AGAIN</p></Link>
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={"center"}>
                      <CatBreedResult />
                    </Grid>
                  </Grid>
                </Container>
              </>
            }></Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
