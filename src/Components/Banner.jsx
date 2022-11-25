import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import avatar from '../img/image-The-Witcher-social-media-banner-Netflix.jpg'

export const Banner = () => {
    const clases = useStyle();

    const truncate = (string, n)=> string?.length > n ? `${string.substring(0, n-1)}...`:string
  return (
    <div className={clases.root}>
      <div className={clases.content}>
        <Typography variant="h2" component="h1" >
          Movie title
        </Typography>
        <div className={clases.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography variant="h6" className={clases.description}>
          {
            truncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 160)
          }
        </Typography>
        <div className={clases.fottom}></div>
      </div>
    </div>
  )
}
const useStyle = makeStyles((theme)=>({
    root:{
     backgroundImage: `url(${avatar})`,
     position: 'relative',
     height:"640px",
     objectFit:"contain",
    //  backgroundRepeat: "no-repeat",
     backgroundSize: "1600px",
     backgroundPosition: "center",
     color: "#fff",
    },
    description:{
      justifyContent:"space-around"
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
        padding: theme.spacing(1,4,1,4),
        marginRight:"1rem",
        backgroundColor:"rgba(51,51,51,0.5)"
      },
      "& button:hover":{
        color: "#000",
        backgroundColor:"#e6e6e6"
      }
    },
  }))
  