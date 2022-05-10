import React from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
    display: "none",
});

const ButtonOutlined = ({ inputType, captureType, acceptType, onChange, buttonText }) => {
    return (
        <label htmlFor="outlined-button">
            <Input 
                id="outlined-button"
                type={inputType} 
                capture={captureType} 
                accept={acceptType} 
                onChange={onChange}
                onClick={(e) => {e.target.value = null}}
            />
            <Button variant="outlined" component="span" fullWidth>
                {buttonText}
            </Button>   
        </label>
    )
}

ButtonOutlined.defaultProps = {
    buttonText: "Button"
}

ButtonOutlined.propTypes = {
    inputType: PropTypes.string,
    captureType: PropTypes.string,
    acceptType: PropTypes.string,
    onChange: PropTypes.func,
    buttonText: PropTypes.string
}

export default ButtonOutlined
