import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { NetflixButton, NetflixInput } from '../Style/StyleComponents';

export const SignUp = () => {
  const clases = useStyle();
  return (
    <div className={clases.root}>
      <Typography variant="h5" align="left">
        Sign in
      </Typography>
      <form className={clases.form}>
        <NetflixInput placeholder="Email" className={clases.email}/>
        <NetflixInput placeholder="Password" className={clases.password}/>
        <NetflixButton >Sign In</NetflixButton>
        <Typography variant="subtitle2">
          New to Netflix ? {".."}
          <span className={clases.signuplink}>
             Sign Up now.{"."}
          </span>
        </Typography>
      </form>
    </div>
  )
}
const useStyle = makeStyles((theme)=>({
  root:{
    maxWidth:"350px",
    width:"20rem",
    height:"25rem",
    background:"rgba(0,0,0,0.65)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems: "center",
    "& h5":{
      marginTop: theme.spacing(7),
      width:"60%"
    },
    "& button":{
      width:"50%",
      borderradius:"5px"
    }
  },
  signuplink:{

  },
  form:{
    height:"14rem",
  }
}))