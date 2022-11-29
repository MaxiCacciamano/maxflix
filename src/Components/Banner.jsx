import { Button, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import avatar from '../img/image-The-Witcher-social-media-banner-Netflix.jpg'
import requests from '../Request';

export const Banner = () => {
    const clases = useStyle();
    const[movie, setMovie] = useState([]);

    const truncate = (string, n)=> string?.length > n ? `${string.substring(0, n-1)}...`:string

    useEffect(()=>{
      const fetchData = async ()=>{
        const request = await axios.get(requests.fetchNetflixOriginals)
        const random = Math.floor(Math.random()* request.data.results.length -1 ) 
        setMovie(request.data.results[random])
        return request
      }
      fetchData()
    },[])
  return (
    <div className={clases.root} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
      <div className={clases.content}>
        <Typography variant="h2" component="h1" >
          {movie.title || movie?.name || movie?.original_name}
        </Typography>
        <div className={clases.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography variant="h6" className={clases.description}>
          {
            truncate(movie?.overview, 160)
          }
        </Typography>
        <div className={clases.fottom}></div>
      </div>
    </div>
  )
}
const useStyle = makeStyles((theme)=>({
    root:{
    //  backgroundImage: `url(${avatar})`,
     position: 'relative',
     height:"640px",
     objectFit:"contain",
    //  backgroundRepeat: "no-repeat",
     backgroundSize: "1600px",
     backgroundPosition: "center",
     color: "#fff",
    },
    description:{
      justifyContent:"space-around",
    },
    content:{
      // position:"relative",
      // top:"300px"
      padding:"50px",
      paddingTop: "170px",
      "& h1":{
        fontSize:"100px"
      },
      "& h6":{
        width:"40%",
        justifyContent:"center",
        color:"#fff"
      }
      },
    fottom:{
      position: "absolute",
      top:"30vh",
      bottom:0,
      left:0,
      right:0,
      zIndex:99,
      backgroundImage:
       "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
    },
    buttons:{
      "& button":{
        color: "#fff",
        fontweight: 700,
        borderRadius:"5px",
        padding: theme.spacing(1,7,1,7),
        marginRight:"1rem",
        margin:"20px",
        backgroundColor:"rgba(51,51,51,0.5)"
      },
      "& button:hover":{
        color: "#000",
        backgroundColor:"#e6e6e6"
      }
    },
  }))
  