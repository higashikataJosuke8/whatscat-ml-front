import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material"

const AlertDialog = ({ openDialog, handleClickCloseDialog, handleFetchAndClose, imageUploaded }) => {
    
    return (
        <div>
           <Dialog
                open={openDialog}
                onClose={handleClickCloseDialog}
                aria-labelledby="alert-dialog-title"
                PaperProps={{ sx: { width: "212px", height: "124px" } }}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Proceed upload?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClickCloseDialog} sx={{ mr: 1 }}>Cancel</Button>
                    <Link to={imageUploaded ? "#" : "/result"} style={{ textDecoration: "none" }}>
                        <Button variant="contained" onClick={handleFetchAndClose} autoFocus>Proceed</Button>
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
    handleClickCloseDialog: PropTypes.func,
    handleFetchAndClose: PropTypes.func,
    imageUploaded: PropTypes.bool
}

export default AlertDialog
