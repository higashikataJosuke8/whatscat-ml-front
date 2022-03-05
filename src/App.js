// TASKS TO DO
// If the user returned from the results page to the image capture, remove the recent uploaded image (not sure if needed)

// ONGOING TASKS
// imageHandler still malfunctioning

// FINISHED TASKS
// Logo is not present on Results page on larger screen
// If the upload is not an image, raise an error alert
// The Proceed button in the confirmation dialog should be contained
// Create caption specifying the minimum image dimension
// Create caption specifying that image should not be blurry or it would cause issues

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
import brandLogo from './images/whatscat-icon-sm.png'
import '@fontsource/nunito'

// Local component imports
import Header from './components/Header'
import HeaderCancel from './components/HeaderCancel'
import ButtonOutlined from './components/ButtonOutlined'
import ButtonContained from './components/ButtonContained'
import CatBreedResult from './components/CatBreedResult'
import AlertDialog from './components/AlertDialog'
import ErrorAlert from './components/ErrorAlert'

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
    highBreedPct: {
      color: '#7c1fa3'
    },
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
  const [catImage, setCatImage] = useState(logo);
  const [catImageUploaded, setCatImageUploaded] = useState(true);
  // used in AlertDialog
  const [openDialog, setOpenDialog] = useState(false);
  // state for checking whether the upload is an image or not
  const [uploadNotImage, setUploadNotImage] = useState(false);

  // image handler (for responsive image uploads), also used for knowing whether a cat image is uploaded already
  // also used on checking whether the upload is an image or not
  const imageHandler = (e) => {
    console.log("Image handler commencing...")
    
    // code for handling non-image uploads
    const image = e.target.files[0]
    const imageType = image["type"]
    console.log("imageType has a typeof " + typeof(imageType))
    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"]
    
    if (!validImageTypes.includes(imageType)){
      console.log("The uploaded file is not an image!")
      setUploadNotImage(true)
      setCatImage(logo)
      console.log("uploadNotImage is " + uploadNotImage)
      // uploadValidation();
      return;
    }
      
    const reader = new FileReader();
    reader.onload = () => {
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
    console.log("Dialog opened!")
  };
  
  // function for handling dialog closing
  const handleClose = () => {
    setOpenDialog(false);
    console.log("Dialog closed!")
  };

  // function for handling error alert closing
  const handleAlertClose = () => {
    setUploadNotImage(false);
  }

  // function for handling non-image uploaded files
  // const uploadValidationResponse = () => {
  //   console.log("The uploaded file is not an image!")
  //   setUploadNotImage(true)
  //   setCatImage(logo)
  //   console.log("uploadNotImage is " + uploadNotImage)
  // }

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Routes> 
            <Route path='/' element={
              <>
                {/* Image Capture screen */}
                <Header title='Image Capture' icon={brandLogo}/>
                {/* <Alert severity="error">The uploaded file must be an image (only accepts .png and .jpeg)</Alert> */}
                <ErrorAlert uploadNotImage={uploadNotImage} onClick={handleAlertClose} />
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
                      <img src={catImage} alt="displaying cat" id="img" style={{ width: "75%", height: "auto" }}/>
                    </Grid>
                    <Grid item xs={9} md={10} textAlign={"center"}>
                      <Typography variant="caption">Minimum image dimensions are 300x300, make sure it's not blurry to avoid problems!</Typography>
                    </Grid>
                    <Grid item xs={9} md={5} textAlign={"center"}>
                      <ButtonOutlined inputType='file' captureType='user' acceptType='image/*' onChange={imageHandler} buttonText='Capture Image' />          
                    </Grid>
                    <Grid item xs={9} md={5} textAlign={"center"}>
                      <ButtonOutlined inputType='file' acceptType='image/*' onChange={imageHandler} buttonText='Upload Image'/>
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
                <HeaderCancel title='Result' icon={brandLogo}/>
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
                      <img src={catImage} alt="displaying cat" id="img" style={{ width: "75%", height: "auto" }}/>
                    </Grid>
                    <Grid item xs={9} md={10} textAlign={"center"}>
                      <Typography variant="body1">
                        This cat is a <Typography style={{ display: 'inline-block' }} color="primary"><strong>{catBreedResultsList[0].catBreed.toLowerCase()}</strong></Typography>
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
