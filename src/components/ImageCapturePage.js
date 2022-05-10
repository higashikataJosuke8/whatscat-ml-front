import { React, useState, useEffect } from "react"
import PropTypes from "prop-types"

import { Container, Grid, Typography } from "@mui/material"
import Compressor from 'compressorjs';

import Header from "./Header"
import ErrorAlert from "./ErrorAlert"
import AlertDialog from "./AlertDialog"
import ButtonOutlined from "./ButtonOutlined"
import ButtonContained from "./ButtonContained"

import noImagePresent from "../images/NoImage.png"

const ImageCapturePage = ({ catImage, settingCatImage, settingFinalResult, settingResponseOk }) => {
    
    // State for checking whether an image is uploaded, which enables the Submit button
    const [imageUploaded, setImageUploaded] = useState(true);
    // State for checking whether the upload is an image or not
    const [uploadErrorAlert, setUploadErrorAlert] = useState(false);
    // State used in AlertDialog
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        settingCatImage(noImagePresent)
        settingFinalResult(null)
        settingResponseOk(false)
    }, [])

    // Image handler (for responsive image uploads), also used for knowing whether a cat image is uploaded already,
    // also used on checking whether the upload is an image or not.
    const imageHandler = (e) => {
        
        // Code for handling non-image uploads
        const image = e.target.files[0]
        const imageType = image["type"]
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"]
        
        if (!validImageTypes.includes(imageType)){
            // Makes the error alert appear
            setUploadErrorAlert(true)
            // Defaults to original icon
            settingCatImage(noImagePresent)
            // Disables the Submit button
            setImageUploaded(true)
            return;
        }
        
        // Code for extracting the image
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                settingCatImage(reader.result)
                setImageUploaded(false)
            } 
        }

        reader.readAsDataURL(e.target.files[0])

    }

    // Function for handling dialog opening
    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };
    
    // Function for handling dialog closing
    const handleClickCloseDialog = () => {
        setOpenDialog(false);
    };

    // Function for handling error alert closing
    const handleAlertClose = () => {
        setUploadErrorAlert(false);
    }

    // Function for handling dialog closing and handling requests and responses via REST API
    const handleFetchAndClose = () => {
        setOpenDialog(false);
        
        // Initialize catBreedResultsList and assign the value to settingFinalResult
        let catBreedResultsList = []
        settingFinalResult(catBreedResultsList)
        
        // Get the file data
        let file = document.getElementById("outlined-button").files[0]

        // compress image before uploading to API
        let compressor = new Compressor(file, {
            quality: 0.6,
            mimeType: 'image/jpeg',
            convertTypes: ['image/png', 'image/jpeg'],

            success(img) {
                let formData = new FormData()
                formData.append("img", img, file["name"])
          
                let requestOptions = {
                    method: "POST",
                    body: formData
                };
          
                fetch("https://whatscat-api.ml/v1/predict", requestOptions)
                .then(response => response.json())
                .then(result => {
                    let predictions = result["predictions"]
                    const topPredictions = 5
                    
        
                    for(let i = 0; i < topPredictions; i++){  
                        catBreedResultsList.push({
                        id: i + 1,
                        catBreed: predictions[i][1],
                        percentage: predictions[i][0]
                        });
                    }
        
                    settingFinalResult(catBreedResultsList)
                    settingResponseOk(true)
                })
                .catch(err => {
                    console.error("Error:", err);
                })
              },
              error(err) {
                console.log(err.message);
              },
        });

    };

    return (
    <>
        <Header title="Image Capture"/>
        <ErrorAlert uploadErrorAlert={uploadErrorAlert} onClick={handleAlertClose}/>
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
                    <Typography variant="caption">Minimum image dimensions are 300x300 (only accepts .png, .jpg, and .jpeg), make sure it's not blurry to avoid problems!</Typography>
                </Grid>
                <Grid item xs={9} md={5} textAlign={"center"}>
                    <ButtonOutlined inputType="file" captureType="environment" acceptType="image/*" onChange={imageHandler} buttonText="Capture Image"/>          
                </Grid>
                <Grid item xs={9} md={5} textAlign={"center"}>
                    <ButtonOutlined inputType="file" acceptType="image/*" onChange={imageHandler} buttonText="Upload Image"/>
                </Grid>
                <Grid item xs={9} md={10} textAlign={"center"}>
                    <ButtonContained inputType="submit" buttonText="Submit" imageUploaded={imageUploaded} onClick={handleClickOpenDialog}/>
                </Grid>
            </Grid>

            {/* Alert dialog */}
            <AlertDialog openDialog={openDialog} handleClickCloseDialog={handleClickCloseDialog} handleFetchAndClose={handleFetchAndClose} imageUploaded={imageUploaded}/>
        </Container>
    </>
  )
}

ImageCapturePage.propTypes = {
    catImage: PropTypes.string,
    settingCatImage: PropTypes.func, 
    settingFinalResult: PropTypes.func,
    settingResponseOk: PropTypes.func 
}

export default ImageCapturePage