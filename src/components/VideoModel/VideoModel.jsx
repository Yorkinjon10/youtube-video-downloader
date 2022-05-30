import React, {useState, useEffect} from 'react'
import axios from 'axios';

export const VideoModel = (props) => {
  const [url, setUrl] = useState('');
  useEffect(()=>{
      setUrl(props.url);
  }, [props.url, props.click])
  useEffect(()=>{
   axios
   .get(`https://ytmedia.p.rapidapi.com/@api/json/audiostreams/kcCXl12FcRc`, {
    headers: {
        'x-rapidapi-host': 'ytmedia.p.rapidapi.com',
        'x-rapidapi-key': '4f8ecfededmsh7ec27f1653939d6p197344jsna370504f98a2'
      }
   })
   .then((res)=>{
       console.log(res);
   })
   .catch((err)=>{
       console.log(err);
   })
  }, [])
  return (
    <div>VideoModel</div>
  )
}
