import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../FireBase';

import { NetflixButton, NetflixInput } from '../Style/StyleComponents';
import { Home } from './Home';

export const SignUp = () => {
  const clases = useStyle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) =>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((authuser)=>
    history.push("/")
      // console.log(authuser,"yo vengo del SignInWithEmail..."
      )
    .catch((err)=>{
      alert(err.message,"parametros invalidos")
    })
  }
  const register = (e) =>{
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email, password)
    .then(
      authUser=>console.log(authUser),
      alert("perfil creado con exito")
      // const user = userCredential.user;

    )
    .catch((err) => {
       alert(err.message, "error al crear usuario");
    });
  }

  function clearInput(e){
    e.preventDefault();
      setEmail("")

  }
  return (
    <div className={clases.root}>
      <Typography variant="h5" align="left">
        Sign in
      </Typography>
      <form className={clases.form} onSubmit={clearInput} >
        <NetflixInput type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className={clases.email}/>
        <NetflixInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className={clases.password}/>
        <NetflixButton onClick={signIn} type="submit" >Sign In</NetflixButton>
        <Typography variant="subtitle2">
          New to Netflix ? {".."}
          <span 
          className={clases.signuplink}
          onClick={register}
          >
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
    justifyContent:"space-evenly",
    alignItems: "center",
    "& h5":{
      marginTop: theme.spacing(7),
    },
    "& button":{
      width:"60%",
      borderradius:"5px"
    }
  },
  signuplink:{

  },
  form:{
    height:"14rem",
  },
  email:{
    marginBottom: theme.spacing(2)
  },
  password:{
    marginBottom: theme.spacing(2)
  },
  signuplink:{
    color:"#fff",
    cursor:"pointer",
    "&:hover":{
      textDecoration:"underline",
    }
  }
}))