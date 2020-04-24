import React,{useState, useEffect} from 'react';
// import './assets/css/custom.css'
import axios from 'axios'
import Loader from './components/widgets/loader/PageLoader'

import Home from'./pages/Home';
import Login from'./pages/auth/Login';
import Credentials from './pages/auth/Credentials';
import Signup from'./pages/auth/Signup';
import Kyc from './pages/auth/KYC';
import VerifyEmail from './pages/auth/VerifyEmail';
import Error from './pages/Error';



import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';

// react-notification


// authentication
import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'
import {getToken, removeUserSession, setUserSession} from './utils/Common'
import Dashboard from './pages/Dashboard';


function App() {

  // const [authLoading, setAuthLoading] = useState(true)

  // useEffect(() => {
   
  //   const token = getToken();
  
  //   if (!token) {
  //     return console.log("token is empty");
  //   }
  //   else{
      
  //   console.log("token is populTED")


  //   const config ={
  //     header: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
 
  //   axios.post('https://yotemarket.co.ke/kev/api/validate_token.php', token, config)
  //   .then(response => {

  //   console.log("response from token validation" + response)
  //     setUserSession(response.data.token, response.data.user);
  //     setAuthLoading(false);

  //   }).catch(error => {
  //     console.log(JSON.stringify(error))
  //     // removeUserSession();
  //     setAuthLoading(false);
  //   });

  //   }

  // }, []);
 
  // if (authLoading && getToken()) {
  //   return <div>
  //     <Loader />
  //   </div>
  // }
  return (
  
      <div className="App">
       
      
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact  path="/login" component={Login}/>
            <Route exact  path="/credentials" component={Credentials}/>
            <Route exact  path="/verify" component={VerifyEmail}/>
       
            <Route exact  path="/signup" component={Signup}/>
            <Route exact  path="/kyc" component={Kyc}/>
            <Route exact path= "/dashboard" component={Dashboard}/>
   
            <Route component={Error}/>
            
          </Switch>
       
      </div>

  );
}

export default App;
