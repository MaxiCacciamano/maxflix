import { makeStyles, Typography } from '@material-ui/core';
import { NetflixButton } from '../Style/StyleComponents'


export const Plans = ({cost, children, color="red", wide}) => {
    const clases = useStyle();
  return (
    <div className={clases.root}>
      <Typography variant="h5" className={clases.standar}>
      {children}
      </Typography>
      <NetflixButton color={color} wide={wide}>Suscribe</NetflixButton>
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
  