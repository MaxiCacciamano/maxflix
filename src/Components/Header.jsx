import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../img/pngegg.png';

export const Header = () => {
    const clases = useStyle();
    const[show, setShow] = useState(false);


    const hideHeader = ()=>{
        window.scrollY > 100 ?
            setShow(true)
        :setShow(false)

    }

    useEffect(()=>{
        window.addEventListener("scroll", hideHeader);
        return window.addEventListener("scroll", hideHeader)
    },[])//el array vacion significa que se va aejecutar una ves solo cuando el useeffect se refresque
  return (
    <AppBar position="sticky" elevation={0}  className={`${clases.root} ${show && clases.transparent}`}>
        <Toolbar className={clases.toolbar}>
                <Link to="/">
            <IconButton >
                  <img src={logo} alt="logo" className={clases.logo}/>
            </IconButton>
                </Link>
            <Link to="/profile">
            <Avatar variant="square" style={{cursor:"pointer"}}/>
            </Link>
        </Toolbar>
    </AppBar>
  )
}
const useStyle = makeStyles((theme)=>({
    root:{
      backgroundColor:"#111",
      top:0,
      left:0,
      right:0,
    },
    transparent:{
        backgroundColor:"transparent",
    },
    toolbar:{
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
    },
    logo:{
        width:"150px",
        cursor: "pointer",
        // padding:"10px"
    }
  }))
  