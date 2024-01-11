// Content.js
import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const Content = ({ content }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'black',
      }}
    >
      <Typography variant="h3">{content.title}</Typography>
      <Typography variant="body1">{content.description}</Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Box>
  );
};

export default Content;
