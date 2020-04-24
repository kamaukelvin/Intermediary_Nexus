import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {getToken} from './Common'
// import {useAuth} from '../context/auth'

export default function PrivateRoute({component: Component, ...rest}) {

 
    return (
        <Route
        {...rest}
        render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{pathname: "/login", state:{referer: props.location}}} />}
      />
    )
}
