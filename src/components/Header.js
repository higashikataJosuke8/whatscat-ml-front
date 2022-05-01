import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material"

import brandLogo from "../images/WhatsCatLogoSM.png"

const Header = ({ title }) => {
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr:2 }}
                        >
                            <img src={brandLogo} style={{ maxWidth: "33px" }} alt="brand logo of WhatsCat" />
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

Header.defaultProps = {
    title: "Title"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
