import { makeStyles } from '@material-ui/core';
import React from 'react'

export const Rows = () => {
    const clases = useStyle();
  return (
    <div>Rows</div>
  )
}
const useStyle = makeStyles((theme)=>({
    root:{
      // backgroundColor: "#111",
      minHeight:"100vh"
    }
  }))
  