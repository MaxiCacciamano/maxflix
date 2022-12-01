import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Header } from '../Components/Header';
import { Plans } from '../Components/Plans'
import avatar from '../img/descarga.png'
import { NetflixButton } from '../Style/StyleComponents';
import { Login } from './Login';
import {auth} from '../FireBase';

export const Profile = () => {
  const clases = useStyle();
  const history = useHistory();
  const signOut = ()=>{
      auth.signOut();
      history.push("/login")

  }
  return (
    <div className={clases.root}>
      <Header/>
      <Typography variant="h4" component="h1">
        Edit Profile
      </Typography>
      <div className={clases.info}>
        <img src={avatar} alt="avatar"/>
         <div className={clases.details}>
           <div className={clases.plans}>
            <Typography variant="h6">email user</Typography>
            <Typography className={clases.plantext} variant="h5" gutterBottom>Plans</Typography>
            <Plans cost={7.99}>Netflix Standar</Plans>
            <Plans cost={11.99}>Netflix Basico</Plans>
            <Plans cost={15.99} wide="medium" color="gray">Netflix Premium</Plans>
            <NetflixButton onClick={signOut} className={clases.bot}>
              Sign Out
            </NetflixButton>
           </div>
         </div>
      </div>
    </div>
  )
}
const useStyle = makeStyles((theme)=>({
  root:{
    color: "#fff",
    minHeight:"20vh",
    // maxWidth:"800px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  info:{
    width:"80%",
    display:"flex",
    "& img":{
      height:"100px",
      [theme.breakpoints.down("xs")]:{
        display:"none"
      }
    }
  },
  plans:{
    width:"100%",
  },
  plantext:{
    borderBottom:"1px solid lightgray",
  },
  bot:{
    width:"100%",
    marginTop:"1rem"
  },
  details:{
    width:"100%",
    marginLeft:theme.spacing(3),
    "& h6":{
      backgroundColor:"#aaa",
      padding:theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize:"18px"
    }
  },
}))