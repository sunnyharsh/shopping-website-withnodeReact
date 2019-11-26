import React, {Fragment} from 'react'
import { Route, Redirect } from "react-router-dom";
import  auth  from "../auth/Auth"
const PrivateRoute =({Component: Component, ...rest})=> {
    let isAuth=auth.isAuthenticated()
    return (
      <Fragment>
        <Route {...rest} render={(props)=>{
          if(isAuth){
            return <Component {...props}/>
          }
          else{
            return <Redirect to={{
              pathname:"/login",
              state:{
                from:props.location
              }
            }}
            />
          }
        }}/>
      </Fragment>
    )
}
// isAuthenticated
export default PrivateRoute