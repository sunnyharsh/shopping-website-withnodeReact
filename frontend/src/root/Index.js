import React, { Component } from 'react'
import store from "../store/index.store";
import { Provider } from "react-redux";
import App from "../components/app/App"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../theme/index.theme";
import Header from "../components/header/Header";
import {BrowserRouter } from "react-router-dom"

class Index extends Component{
    render(){
        return(
            <ThemeProvider theme={theme}>
                <Provider store={store()} >
                    <React.Fragment>
                        <BrowserRouter>
                        
                        <Header/>
                        <App/>
                        </BrowserRouter>
                    </React.Fragment>
                </Provider>
            </ThemeProvider>
        )
    }
}
export default Index;