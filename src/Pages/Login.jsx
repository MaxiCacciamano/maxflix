import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import logo from '../img/pngegg.png';
import fondo from '../img/netflix-peliculas-y-series-que-abandonan-catalogo-mayo-2022-colombia-1023895.jpg';
import { NetflixButton, NetflixInput } from '../Style/StyleComponents';
import {SignUp} from './SignUp';
export const Login = () => {
  const clases = useStyle();
  const [sigIn, setsigIn] = useState(false);
  return (
    <div className={clases.root}>
        <img src={logo} alt="logo" className={clases.logo}/>
        <NetflixButton className={clases.session}>
          Iniciar seccion
        </NetflixButton>
        <div className={clases.info}>
          {
          !sigIn ? (<SignUp/>) :(
            <>
            <Typography variant="h4">
              Unlimmited films, tv programs and more
            </Typography>
            <Typography variant="h6">
              watch anywhere. Cancel at my time
            </Typography>
            <Typography variant="h6">
              Ready to watch? Enter your email to create or restart membership
            </Typography>
          <div className={clases.inputBlock}>
          <NetflixInput placeholder="EMAIL ADRESS"/>
          <NetflixButton>
            Get started
          </NetflixButton>
          </div>
                </>
          )
            
  }
    </div>
    </div>
  )
}
const useStyle = makeStyles((theme)=>({
  root:{
    position:"relative",
    height:"100vh",
    objectFit:"contain",
    backgroundImage:`url(${fondo})`,
    backgroundSize:"cover",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  logo:{
    position:"fixed",
    top:0,
    left:20,
    width:"190px",
    cursor:"pointer",
    padding:15
  },
  session:{
    position:"fixed",
    zIndex:15,
    right:20,
    top:20
  },
  info:{
    color:"#fff",
    zIndex:15,
    textAlign:"center",
    "& h4":{
      fontweight:800,
    },
    "& h5":{
      fontweight:400,
    }
  },
  inputBlock:{
    padding:"20px"
  }
}))
