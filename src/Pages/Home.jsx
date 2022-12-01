import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Header } from '../Components/Header';
import {Banner} from '../Components/Banner'
import { Rows } from '../Components/Rows';
import requests from '../Request';


export const Home = ({}) => {
  const clases = useStyle();
  return (
    <div className={clases.root}>
      <Header/>
      <Banner/>
      <div className={clases.titulos}>
      <Rows title={<h3>Netflix Originals</h3>} fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Rows title={<h3>Top Rated</h3>} fetchUrl={requests.fetchTopRated}/>
      <Rows title={<h3>Actions Movies</h3>} fetchUrl={requests.fetchActionMovies}/>
      <Rows title={<h3>Comedy Movies</h3>} fetchUrl={requests.fetchComedyMovies}/>
      <Rows title={<h3>Horror Movies</h3>} fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title={<h3>Romance Movies</h3>} fetchUrl={requests.fetchRomanceMovie}/>
      <Rows title={<h3>Documentaries</h3>} fetchUrl={requests.fetchDocumentaries}/>
      </div>
    </div>
  )

}
const useStyle = makeStyles((theme)=>({
  root:{
  },
  titulos:{
    // bottom:"200px",
    // position:"relative",
    zIndex:"99",
    "& title":{
      padding:"40px"
    },
    "& h3":{
      padding:"20px"
    },
    "& @media screen and (max-width:480px)":{
      bottom:"400px",
      position:"relative",

    },
  }
}))
