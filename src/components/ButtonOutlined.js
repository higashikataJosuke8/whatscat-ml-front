import React from 'react'

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const Input = styled('input')({
    display: 'none',
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
            />
            <Button variant="outlined" component="span" fullWidth>
                {buttonText}
            </Button>   
        </label>
    );
}

export default ButtonOutlined
