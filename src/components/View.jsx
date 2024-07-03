import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export const View = () => {
    const rows=[{mName: 'Movie 1',mdesc: 'Movie 1',mdirector:'Maniratnam'},
        {mName: 'Movie 2',mdesc: 'Movie 2',mdirector:'Karan Johar'}
    ]
  return (
    (rows.map((item)=>(
  
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Movie 1
      </Typography>
      <Typography variant="h5" component="div">
        Kalki
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        sci-fi
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )))
);
}
  

