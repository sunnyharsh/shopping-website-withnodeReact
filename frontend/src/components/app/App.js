import React from 'react';
import {Switch, Route,BrowserRouter } from "react-router-dom"
import Login from "../login/Login";
import PrivateRoute from "../../routing/private.routing";
import PublicRoute from "../../routing/public.routing";
import Cart from "../cart/Cart";
import ShowProduct from "../showProduct.js/ShowProduct";
class App extends React.Component{
    fire=()=>{
        this.props.$productData({name:"sunny"})
    }
    render(){
        return(
            <React.Fragment>
                
                 <Switch>
                    <PrivateRoute exact path="/" Component={ShowProduct}/>
                    <PublicRoute exact path="/login" Component={Login}/>
                    <PrivateRoute exact path="/cart" Component={Cart }/>
                </Switch>
               
            </React.Fragment>
        )
    }
}

export default App;