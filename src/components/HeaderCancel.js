import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const HeaderCancel = ({ title, icon }) => {

    return (
        <header>
            <AppBar position="static">
                <Toolbar>  
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr:2, display: { sm: "inline", lg: "none" } }}
                        >
                            <CloseIcon />
                        </IconButton> */}
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr:2 }}
                            >
                                <img src={icon} style={{ maxWidth: '33px' }} alt="brand logo of WhatsCat" />
                        </IconButton>
                    </Link>  
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
}

HeaderCancel.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
}

export default HeaderCancel
