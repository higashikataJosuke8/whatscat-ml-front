import React from 'react'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { Typography } from '@mui/material'

const CatBreedResult = ({ catBreedResultsList }) => {
    return (
        <>
            {catBreedResultsList.map((cat) => (
              <>
                <Grid item xs={6} md={2} textAlign={"left"}>
                  <Typography variant="body1">
                    {cat.catBreed}
                  </Typography>
                </Grid>
                <Grid item md={8} textAlign={"center"} sx={{ display: { xs: "none", md: "inline" } }}>
                  <Typography variant="body1">
                    <Divider/>
                  </Typography>
                </Grid>
                <Grid item xs={6} md={2} textAlign={"right"}>
                  <Typography variant="body1">
                    {cat.percentage}%
                  </Typography>
                </Grid>
              </>
            ))}
        </>
    )
}

export default CatBreedResult
