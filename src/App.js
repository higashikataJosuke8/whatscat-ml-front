// THINGS TO DO
// Loading screen (not sure if needed)
// Fixing text results align in Result page
// If the upload is not an image, raise an error dialog
// If the user returned from the results page to the image capture, remove the recent uploaded image
// Put a logo next to the header

// TASKS FINISHED [FEB 9, 2022]
// Fixing text results align in Result page
// Added confirmation dialog before uploading image
// Tweaked imageHandler function, but error may still randomly appear, not sure of the cause 

// React imports
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// Material UI imports
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

// CSS imports
import "./App.css"

// Other imports
import logo from "./images/cat-silhoutte.png"
import '@fontsource/nunito'

// Local component imports
import Header from './components/Header'
import ButtonOutlined from './components/ButtonOutlined'
import ButtonContained from './components/ButtonContained'
import CatBreedResult from './components/CatBreedResult'
import AlertDialog from './components/AlertDialog'

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

// Test data for result list
const catBreedResultsList = [
  {
    id: 1,
    catBreed: 'Tuxedo',
    percentage: 90
  },
  {
    id: 2,
    catBreed: 'Domestic Shorthair',
    percentage: 2
  },
  {
    id: 3,
    catBreed: 'Chausie',
    percentage: 1
  }
]

function App() {
  // states
  const [catImage, setCatImage] = useState(logo)
  const [catImageUploaded, setCatImageUploaded] = useState(true)
  // used in AlertDialog
  const [openDialog, setOpenDialog] = useState(false);

  // variables
  const catBreed = 'tuxedo'
  
  // image handler (for responsive image uploads), also used for knowing whether a cat image is uploaded already
  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if(reader.readyState === 2){
        setCatImage(reader.result)
        setCatImageUploaded(false)
      } 
    }

    console.log(e.target.files[0])
    reader.readAsDataURL(e.target.files[0])

  }

  // function for handling dialog opening
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  // function for handling dialog closing
  const handleClose = () => {
    setOpenDialog(false);
  };


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
                    <Grid item xs={12} md={10} textAlign={"center"}>
                      <img src={catImage} alt="displaying cat" id="img" style={{ width: "75%", height: "auto" }} />
                    </Grid>
                    <Grid item xs={9} md={5} textAlign={"center"}>
                      <ButtonOutlined inputType='file' captureType='user' acceptType='image/*' onChange={imageHandler} buttonText='Capture Image' />          
                    </Grid>
                    <Grid item xs={9} md={5} textAlign={"center"}>
                      <ButtonOutlined inputType='file' onChange={imageHandler} buttonText='Upload Image'/>
                    </Grid>
                    <Grid item xs={9} md={10} textAlign={"center"}>
                      <ButtonContained inputType='submit' buttonText='Submit' imageUploaded={catImageUploaded} onClick={handleClickOpen}/>
                    </Grid>
                  </Grid>
                  
                  {/* Alert dialog */}
                  <AlertDialog openDialog={openDialog} handleClose={handleClose} imageUploaded={catImageUploaded}/>
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
                    <Grid item xs={9} md={10} textAlign={"center"}>
                      <img src={catImage} alt="displaying cat" id="img" style={{ width: "100%", height: "auto" }}/>
                    </Grid>
                    <Grid item xs={9} md={10} textAlign={"center"}>
                      <Typography variant="body1">
                        <p>This cat is a {catBreed}</p>
                        <Typography variant="caption">
                          <Link to='/' style={{ textDecoration: 'none' }}><p>TRY AGAIN</p></Link>
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container
                        rowSpacing={2} 
                        justifyContent="center"
                        alignItems="center"
                  >
                    <CatBreedResult catBreedResultsList={catBreedResultsList}/>

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
