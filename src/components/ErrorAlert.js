import React from "react"
import PropTypes from "prop-types"

import { Alert, Collapse, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const ErrorAlert = ({ uploadErrorAlert, onClick }) => {
    return (
        <Collapse in={uploadErrorAlert}>
            <Alert 
                severity="error"
                sx={{ mb: 2 }}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={onClick}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                The uploaded file must be an image (only accepts .png, .jpg and .jpeg)
            </Alert>
        </Collapse>
    )
}

ErrorAlert.propTypes = {
    uploadErrorAlert: PropTypes.bool,
    onClick: PropTypes.func
}

export default ErrorAlert