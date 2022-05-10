import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { Container, Grid, Typography } from "@mui/material"

import processingIcon from "../images/ProcessingImage.png"
import noInputPresent from "../images/WarningNoImage.png"

import Header from "./Header"
import CatBreedResult from "./CatBreedResult"

const ResultsPage = ({ catImage, finalResult, responseOk }) => {
  
  const inputAndReturnHome = (finalResultVar) => {
    if (finalResultVar) {
      if (responseOk) {
        if (finalResultVar.length > 0) {
          return (
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
                  This cat is likely a <Typography style={{ display: "inline-block" }} color="primary"><strong>{finalResult[0].catBreed.toLowerCase()}</strong></Typography>
                  <Typography variant="caption">
                    <Link to="/" style={{ textDecoration: "none" }}><p>TRY AGAIN</p></Link>
                  </Typography>
                </Typography>
              </Grid>  
            </Grid>
          );
        }
      }
      return (
        <Grid container
              spacing={2}
              rowGap={2} 
              justifyContent="center"
              alignItems="center"
        >
          <Grid item xs={10} md={9} textAlign={"center"}>
            <img src={processingIcon} alt="processing" id="processingIcon" style={{ width: "60%", height: "auto" }}/>
          </Grid>
          <Grid item xs={9} md={10} textAlign={"center"}>
            <Typography variant="body1">
              The image is being processed in the model, please wait!
            </Typography>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid container
              spacing={2} 
              justifyContent="center"
              alignItems="center"
        >
          <Grid item xs={10} md={9} textAlign={"center"}>
            <img src={noInputPresent} alt="input unavailable" id="noInputIcon" style={{ width: "70%", height: "auto" }}/>
          </Grid>
          <Grid item xs={9} md={10} textAlign={"center"}>
            <Typography variant="body1">
              No input detected,
              <Typography color="primary" style={{ display: "inline" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <strong> return home!</strong>
                </Link>
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      )
    }
  }

  const resultsList = (finalResultVar) => {
    if (finalResultVar) {
      if (responseOk) {
        if (finalResultVar.length > 0) {
          return (
            <Grid container
                  spacing={2} 
                  justifyContent="center"
                  alignItems="center"
            >
              <CatBreedResult catBreedResultsList={finalResult}/> 
            </Grid>
          )
        }
      }
      return <></>
    } else {
      return <></>
    }
  }

  return (
    <>
        <Header title="Result"/>
        <Container maxWidth="md"
                   sx={{
                     my: 5,
                   }}
        >
          {inputAndReturnHome(finalResult)}
          {resultsList(finalResult)}
          
        </Container>
    </>
  )
}

ResultsPage.propTypes = {
  catImage: PropTypes.string,
  finalResult: PropTypes.array,
  responseOk: PropTypes.bool
}

export default ResultsPage