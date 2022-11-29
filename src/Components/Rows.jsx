import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'  

export const Rows = ({name,title ,fetchUrl, isLargeRow}) => {
    const clases = useStyle(); 
    const [movies, setMovies] = useState([]);

    const base_Url_img = "https://image.tmdb.org/t/p/original/";


    useEffect(()=>{
      const fetchData = async () => {
        const  request = await axios.get(fetchUrl)
        setMovies(request.data.results)
        return request
      }
      fetchData();
    },[fetchUrl])
  return (
    <div className={clases.root}>
      <Typography variant="h4">
        {title}
      </Typography>
      <div className={clases.posters}>
        {
          movies.map((movie)=>((isLargeRow && movie.poster_path)||
          (!isLargeRow && movie.backdrop_path))&&( 
            <img
             className={`${clases.posterr}
             ${isLargeRow && clases.posterLarge
            }`}
            key={movie.id}
            src={`${base_Url_img}${
              isLargeRow ? movie.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name}
            />
            ))
          } 
          <div>
          <h5>{name}</h5>
          </div>
      </div>
    </div>
  )
}
const useStyle = makeStyles((theme)=>({
    root:{
      color:"#fff",
      marginLeft:theme.spacing(4),
    },
    posters:{
      display:"flex",
      overflowY:"hidden",
      overflowX:"scroll", 
      "&::-webkit-scrollbar":{
        display:"none",
      },
      // "& img":{
        //   width:"12rem"
        // }
      },
      posterr:{
      borderRadius:"5px",
      maxHeight:"12rem",
      objectFit:"contain",
      marginRight:theme.spacing(1),
      transition:"transform 450ms",
      "&:hover":{
        transform:"scale(1.1)"
      },

    },
    posterLarge:{
      maxHeight:"15rem",
      "& hover":{
        transform:"scale(1.15)"
      },
    },
    posterLarge:{
      maxHeight:"15rem",
      "&:hover":{
        transform: "scale(1.15)"
      }
    }
  }))
  