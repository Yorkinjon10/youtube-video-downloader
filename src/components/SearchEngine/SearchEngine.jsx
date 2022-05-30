import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { VideoModel } from '../VideoModel/VideoModel';

export const SearchEngine = () => {
  return (
    <section>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            onChange={(val)=>{console.log(val)}}
          />
          <Button sx={
            {
              height: '100%',
            }
          } 
          variant="contained">Contained</Button>
        </Box>
        <VideoModel />
    </section>
  );
}
