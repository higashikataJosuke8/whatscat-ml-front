import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({ title, hasLeftIcon, icon }) => {
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr:2 }}
                    >
                        <img src={icon} style={{ maxWidth: '33px' }} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}

Header.defaultProps = {
    title: 'Title',
    hasLeftIcon: false
}

Header.propTypes = {
    title: PropTypes.string,
    hasLeftIcon: PropTypes.bool,
    icon: PropTypes.string
}

export default Header
