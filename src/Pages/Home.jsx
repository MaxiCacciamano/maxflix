import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Header } from '../Components/Header';
import {Banner} from '../Components/Banner'
import { Rows } from '../Components/Rows';
import requests from '../Request';


export const Home = ({}) => {
  const clases = useStyle();
  return (
    <div >
      <Header/>
      <Banner/>
      <div className={clases.titulos}>
      <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Actions Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comediy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror movie" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovie}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
    </div>
  )

}
const useStyle = makeStyles((theme)=>({
  root:{
  },
  titulos:{
    "& title":{
      padding:"40px"
    }
  }
}))
