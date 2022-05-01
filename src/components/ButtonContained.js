import React from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
    display: "none",
});

const ButtonContained = ({ inputType, buttonText, imageUploaded, onClick }) => {
    return (
        <label htmlFor="contained-button">
            <Input
                id="contained-button" 
                type={inputType}
                disabled={imageUploaded} 
            />
            <Button variant="contained" 
                    component="span" 
                    fullWidth 
                    disabled={imageUploaded}
                    onClick={onClick}
            >
                {buttonText}
            </Button>
        </label>
    ) 
}

ButtonContained.defaultProps = {
    buttonText: "Button",
    imageUploaded: true
}

ButtonContained.propTypes = {
    inputType: PropTypes.string,
    buttonText: PropTypes.string,
    imageUploaded: PropTypes.bool,
    onClick: PropTypes.func
}

export default ButtonContained
