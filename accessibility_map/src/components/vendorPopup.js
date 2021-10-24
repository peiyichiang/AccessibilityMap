import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

import './vendorPopup.css'

function VendorPopup(props:{id:String, vendor:Object, handleVendorCloseCallback:CallableFunction}) {

  const [hasGallery, setHasGallery] = useState(false);

  useEffect(() => {
    if (props.id != null) {
      console.log(props.vendor)
    }
  }, [props.id])

  useEffect(() => {
    console.log(props.vendor)
  }, [props.vendor])

  return (
    <div className="popupwindow">
      <Dialog open={props.id != null} onClose={props.handleAddVendorCloseCallback}>
        {props.vendor != null ? <DialogTitle>{props.vendor.name}</DialogTitle> : null}
        <DialogContent>
          <Grid container spacing={2} >
            <Grid item xs={hasGallery ? 8 : 12}>
              {props.vendor != null ? <div>{props.vendor.addr}<br></br>{props.vendor.type}</div> : null}
            </Grid>
            {hasGallery ? <Grid item xs={4}>this is where the grid would go</Grid> : null}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleVendorCloseCallback}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default VendorPopup;