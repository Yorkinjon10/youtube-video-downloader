import { Typography, Grid, Box, Avatar } from '@mui/material';
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
export const VideoModel = (props) => {
  const videos = useSelector(state => state?.videoLink);
  console.log(videos);
if(videos?.contents?.length > 0) {
  return (
    <section>
      <Typography>
        Estimated results: {videos.estimatedResults}
      </Typography>
      <Grid sx={{
              display: 'grid',
              marginTop: "80px",
              justifyContent: 'left',
              alignItems: 'center',
              borderRadius: '1px solid #222',
              gridTemplate: '150px / auto auto auto',
            }}>
        {videos?.contents?.map((video)=>{
          return (
            <Grid key={video?.video?.videoId}
              sx={{
                display: 'inline-block',
                width: '400px',
                height: '400px',
              }}
            >
              <Box>
                <Typography>Channel name: <a href={`https://www.youtube.com/c/${video?.video?.channelName}`} rel="noreferrer" target="_blank">{video?.video?.channelName}</a></Typography>
              </Box>

              <Box>
                <img styles={{width: '100%'}} alt={video?.video?.channelName}  src={`${video.video?.thumbnails[0]?.url}`} />
              </Box>
              <Box>
                <Typography>{video?.video?.description}</Typography>
              </Box>
            </Grid>
            )
        })}
      </Grid>
    </section>
  )
} else {
  return (
    <>
      <Typography>Nothing found 404 :/</Typography>
    </>
  )
}}