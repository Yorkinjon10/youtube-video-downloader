import React, { useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { VideoModel } from '../VideoModel/VideoModel';

export const SearchEngine = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const deepUrl = 'https://youtube-search-and-download.p.rapidapi.com/search';
  const nextLink = 'EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D'

  const handleSearch = (e) => {
    e.preventDefault();
    // dispatch({ type: 'SET_VIDEO_LINK', payload: search });
    if(search.length > 0) {
      const options = {
        method: 'GET',
        url: deepUrl,
        params: {
          query: search || '',
          next: nextLink,
          // hl: 'en',
          // gl: 'US',
          // upload_date: 't',
          type: 'v',
          // duration: 's',
          // features: 'li;hd',
          sort: 'v'
        },
        headers: {
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
          'X-RapidAPI-Key': '4f8ecfededmsh7ec27f1653939d6p197344jsna370504f98a2'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch({ type: 'SET_VIDEO_LINK', payload: response.data});
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
  return (
    <section>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: "80px",
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            id="demo-helper-text-aligned"
            sx={{
              width: '60%',
            }}
            label="Video link"
            onChange={(val)=>{console.log(val.target.value); setSearch(val.target.value)}}
          />
          <Button sx={
            {
              height: '100%',
            }
          } 
          type="submit"
          onClick={(e)=>{
            handleSearch(e);
          }}
          variant="contained">Search</Button>
        </Box>
        <VideoModel />
    </section>
  );
}
