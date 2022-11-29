import { Counter } from './features/counter/Counter';
import {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter  ,Route, Switch } from 'react-router-dom';
import { Login } from './Pages/Login';
import { PayPal } from './Pages/PayPal';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Header } from './Components/Header';
import { auth } from './FireBase';
import { login, logout, selectUser } from './features/UserSlice';

function App() {
  const user = useSelector(selectUser);
  const clases = useStyle();
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      userAuth?dispatch(login({
        uid:userAuth.uid,
        email: userAuth.email
      })):dispatch(logout)
    })
    return unsubscribe;
  },[dispatch])


  return (
    <div className={clases.root}>
      <BrowserRouter>
      {
        !user ? (
          <Login/>
        ):(
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile} />
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
