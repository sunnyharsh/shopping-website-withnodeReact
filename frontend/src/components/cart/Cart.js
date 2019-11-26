import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Typography } from "@material-ui/core";
import {fetchCart,deleteCart, updateCart } from "../../store/actions/index.action"
import {connect} from "react-redux"
import SingleComp from "./SingleProduct";
const styles = theme => ({
  cartContainer:{
    display:"flex"
  },
  media: {
    marginTop:12,
    height: 100,
    backgroundSize: "contain"
  },
});

 class Cart extends Component {
  constructor(props){
    super(props)
    this.state={
      num: null
    }
    this.props.$fetchCart()
  }
  componentWillReceiveProps(nextProps){
    // if(nextProps && nextProps._deleteCart && nextProps._deleteCart.success){
    //       this.props.$fetchCart()
    // }
  }
  componentDidMount() {
    this.props.$fetchCart()
  }
  delete=(obj)=>{
    this.props.$deleteCart(obj)
    setTimeout(()=>{
      this.props.$fetchCart()
    },1000)
  }
  update=(obj)=>{
    this.props.$updateCart(obj)
    setTimeout(()=>{
      this.props.$fetchCart()
    },1000)
    
  }
  render() {
    const { _fetchCart}=this.props
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item sm={7}>
            <h1>cart</h1>
          </Grid>
        </Grid>
        {
          _fetchCart && _fetchCart.data.length > 0 ? _fetchCart.data.map((obj,index)=>(
            <React.Fragment key={index}>
              <SingleComp obj={obj} delete={this.delete} update={this.update}/>
            </React.Fragment>
         )):
         <Grid container justify="center">
           <Grid item sm={7}>
             <Typography>Cart have no data...</Typography>
           </Grid>
         </Grid>
        }
      </React.Fragment>
    )
  }
}

const mapState = ({ fetchCart,deleteCart,updateCart }) => {
    return {
      _fetchCart:fetchCart,
      _deleteCart:deleteCart,
      _updateCart:updateCart
    };
};
const mapDispatch = dispatchEvent => ({
    $fetchCart: () => dispatchEvent(fetchCart()),
    $deleteCart: (values) => dispatchEvent(deleteCart(values)),
    $updateCart:(values)=>dispatchEvent(updateCart(values))

});
export default connect(
    mapState,
    mapDispatch
)(withStyles(styles)(Cart));