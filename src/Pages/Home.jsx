import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Header } from '../Components/Header';
import {Banner} from '../Components/Banner'


export const Home = () => {
  const clases = useStyle();
  return (
    <div >
      <Header/>
      <Banner/>
    </div>
  )

}
const useStyle = makeStyles((theme)=>({
  root:{
  }
}))
