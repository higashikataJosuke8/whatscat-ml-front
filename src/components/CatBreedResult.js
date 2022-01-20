import React from 'react'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

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

const CatBreedResult = () => {
    return (
        <div>
            {catBreedResultsList.map((cat) => (
              <>
                <Grid item xs={4} textAlign={"center"}>
                  {cat.catBreed}
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                  ------------------
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                  {cat.percentage} %
                </Grid>
              </>
              
              // <p>{cat.catBreed} ----------------- {cat.percentage}%</p>
            ))}
        </div>
    )
}

export default CatBreedResult
