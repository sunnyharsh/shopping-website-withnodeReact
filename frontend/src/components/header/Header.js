import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom"
import withStyles from "@material-ui/core/styles/withStyles";
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  product:{
    cursor:"pointer"
  }
});

 class Header extends React.Component {
   product=()=>{
     this.props.history.push('/')
   }
   cart=()=>{
     this.props.history.push('/cart')
   }
  render(){
    const {classes}=this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Grid container justify="space-between">
              <Grid item>
                <Typography onClick={this.product} className={classes.product} variant="h6" color="inherit">
                  Products
                </Typography>
              </Grid>
              <Grid item>
                <Typography onClick={this.cart} className={classes.product} variant="h6" color="inherit" align="right">
                  cart
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(withRouter(Header))