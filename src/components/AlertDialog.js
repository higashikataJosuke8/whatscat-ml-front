import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';


const AlertDialog = ({ openDialog, handleClose, imageUploaded }) => {
    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    
    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <div>
           <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                PaperProps={{ sx: { width: "212px", height: "124px" } }}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Proceed upload?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
                    <Link to={imageUploaded ? '#' : '/result'} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" onClick={handleClose} autoFocus>Proceed</Button>
                    </Link>
                </DialogActions>
            </Dialog> 
        </div>
    );
}

AlertDialog.defaultProps = {
    openDialog: false,
    imageUploaded: true
}

AlertDialog.propTypes = {
    openDialog: PropTypes.bool,
    handleClose: PropTypes.func,
    imageUploaded: PropTypes.bool
}

export default AlertDialog
