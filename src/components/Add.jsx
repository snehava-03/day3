import { Box, Button, TextField } from '@mui/material';
import React from 'react'

export const Add = () => {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
       
        id="outlined-required"
        label="Movie Title"
        variant="standard"
      />
      </div>
      <div>
      <TextField
        
        id="outlined-disabled"
        label="Director"
        variant="standard"
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Image"
        variant="standard"
        
     
        
      />
      </div>
      <div>
      <TextField
        id="outlined-required"
        label="Description"
        variant="standard"
        
       
      />
      
      </div>
      <Button variant='contained' >Submit</Button>
      <br></br>
      </Box>
  );
}
