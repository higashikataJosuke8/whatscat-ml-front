import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ErrorAlert = ({ uploadNotImage, onClick }) => {
    return (
        <Collapse in={uploadNotImage}>
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
    uploadNotImage: PropTypes.bool,
    onClick: PropTypes.func
}

export default ErrorAlert