import React, { Component } from 'react';
import LoginForm from "../forms/Login.Form";
import { connect } from "react-redux";
import { loginData } from "../../store/actions/index.action";
import { withRouter } from 'react-router-dom'
import LocalStorage from "../../utils/Localstorage";
import Auth from "../../auth/Auth"
 class Login extends Component {
   constructor(props){
     super(props);
   }
    formSubmit = values => {
        this.props.$loginData(values)
    };
    componentWillReceiveProps(nextProps){
      if(nextProps && nextProps._login && nextProps._login.token){
        LocalStorage.setLocalstorage(nextProps._login.token)
        // Auth.login()
        this.props.history.push('/')
       }
    }
  render() {
    
    return (
      <React.Fragment>   
        <LoginForm
            initialValues={{email: "", pass: "" }}
            onSubmit={this.formSubmit}
          />
      </React.Fragment>
    )
  }
}
const mapState = ({login}) => {
    return {
       _login:login
    };
};
const mapDispatch = dispatchEvent => ({
  $loginData:(values)=>dispatchEvent(loginData(values))
});
export default connect(
  mapState,
  mapDispatch,  
)(withRouter(Login));