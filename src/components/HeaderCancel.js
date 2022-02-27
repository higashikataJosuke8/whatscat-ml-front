import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const HeaderCancel = ({ title, hasLeftIcon }) => {
  return (
    <header>
        <AppBar position="static">
            <Toolbar>
                {   // Checking whether there is a left icon or not
                    hasLeftIcon ?
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr:2, display: { xs: "inline", lg: "none" } }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Link>  
                    : <></>
                }
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </header>
  )
}

HeaderCancel.defaultProps = {
    title: 'Title',
    hasLeftIcon: false
}

HeaderCancel.propTypes = {
    title: PropTypes.string,
    hasLeftIcon: PropTypes.bool
}

export default HeaderCancel
