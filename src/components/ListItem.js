import React from 'react'
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const ListItem = ({ catItem }) => {
  return (
    <>
        <Grid item xs={6} md={2} textAlign={"left"}>
            <Typography variant="body1" color={catItem.id === 1 && "primary"}>
                {catItem.catBreed}
            </Typography>
        </Grid>
        <Grid item md={8} textAlign={"center"} sx={{ display: { xs: "none", md: "inline" }}}>
            <Typography variant="body1">
                <Divider/>
            </Typography>
        </Grid>
        <Grid item xs={6} md={2} textAlign={"right"}>
            <Typography variant="body1" color={catItem.id === 1 && "primary"}>
                {catItem.percentage}%
            </Typography>
        </Grid>
    </>
  )
}

ListItem.propTypes = {
    catItem: PropTypes.object
}

export default ListItem