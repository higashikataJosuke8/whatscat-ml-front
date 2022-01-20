import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const Header = ({ title, hasLeftIcon }) => {
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    {   // Checking whether their is a left icon or not
                        hasLeftIcon ?
                        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr:2 }}
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

Header.defaultProps = {
    title: 'Image Capture',
    hasLeftIcon: false
}

Header.propTypes = {
    title: PropTypes.string,
    hasLeftIcon: PropTypes.bool
}

export default Header
