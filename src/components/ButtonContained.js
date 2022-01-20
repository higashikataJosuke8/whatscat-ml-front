import React from 'react'
import {Link} from 'react-router-dom'

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const Input = styled('input')({
    display: 'none',
});

const ButtonContained = ({ inputType, buttonText, imageUploaded }) => {
    return (
        <Link to={imageUploaded ? '#' : '/result'} style={{ textDecoration: 'none' }}>
            <label htmlFor='contained-button'>
                <Input
                    id='contained-button' 
                    type={inputType}
                    disabled={imageUploaded} 
                />
                <Button variant="contained" 
                        component="span" 
                        fullWidth 
                        disabled={imageUploaded}
                >
                    {buttonText}
                </Button>
            </label>
        </Link>
    ) 
}

export default ButtonContained
