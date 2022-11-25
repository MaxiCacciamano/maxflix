import { Counter } from './features/counter/Counter';
import {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core'
import {useDispatch} from 'react-redux';
import {BrowserRouter  ,Route, Switch } from 'react-router-dom';
import { Login } from './Pages/Login';
import { PayPal } from './Pages/PayPal';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Header } from './Components/Header';

function App() {
  const user =null;
  const clases = useStyle();
  return (
    <div className={clases.root}>
      <BrowserRouter>
      {
        !user ? (
          <Login/>
        ):(
          <Switch>
            <Route path="/profile" component={Profile} >
            </Route>
            <Route path="/PayPal">
              <PayPal/>
            </Route>
            <Route exact path="/" >
              <Home/>
            </Route>
          </Switch>
        )
      }
      </BrowserRouter>
    </div>
  );
}

const useStyle = makeStyles((theme)=>({
  root:{
    backgroundColor: "#111",
    minHeight:"100vh"
  }
}))

export default App;
