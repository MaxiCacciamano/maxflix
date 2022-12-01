import { makeStyles, Typography } from '@material-ui/core';
import { NetflixButton } from '../Style/StyleComponents'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setPrice } from '../features/PriceSlice';


export const Plans = ({cost, children, color="red", wide}) => {
    const clases = useStyle();
    const dispatch = useDispatch();
    // const history = useHistory();

    const handleClick = (cost)=>{
      dispatch(setPrice(cost));
      // history.push("/PayPal")
    }
  return (
    <div className={clases.root}>
      <Typography variant="h5" className={clases.standar}>
      {children}
      </Typography>
      <Link to="paypal">
      <NetflixButton
       color={color}
        wide={wide}
        onClick={()=>handleClick(cost)}
        >Suscribe</NetflixButton>
      </Link>
    </div>
  )
}
const useStyle = makeStyles((theme)=>({
    root:{
      // backgroundColor: "#111",
      // minHeight:"10vh",
      marginTop:theme.spacing(3),
      display: "flex",
      justifyContent:"space-between",
      alignItems: "center",
      "& button":{
        marginBottom:theme.spacing(2),
        width:"200px"
      }
    },
    standar:{
      fontSize:"1,2rem",
    }
  }))
  