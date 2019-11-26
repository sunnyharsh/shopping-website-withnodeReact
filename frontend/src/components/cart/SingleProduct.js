import React, { Component } from 'react'
import { Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  cartContainer:{
    display:"flex"
  },
  media: {
    marginTop:12,
    height: 100,
    backgroundSize: "contain"
  },
  button:{
    background:"#bf5858",
    color:"#fff", 
    fontWeight:"700",
    fontSize:"12px",
    cursor:"pointer",
    border:"none"

  }
});
class SingleComp extends Component {
    constructor(props){
        super(props);
        this.state={
            num:null,
            price:null,
            description:null,
            img:null,
            name:null,
            data:{}
        }
    }
    delete=(obj)=>{
      this.props.delete({id:obj._id})
    }
    update=(obj)=>{
      const {num}=this.state;
      this.props.update({id:obj._id, numOfProd:parseInt(num), prodPrice:parseFloat(obj.price)})
    }
    productNum=(e)=>{
        this.setState({
            num: e.target.value,
        })
    }
    componentDidMount(){
        const {obj}=this.props;
        this.setState({
            num:obj.numberOfItem,
            price:obj.price,
            description:obj.productDescription,
            img:obj.productImage,
            name:obj.productName,
            data:obj
        })
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.obj){
            this.setState({
              num:nextProps.obj.numberOfItem,
              price:nextProps.obj.price,
              description:nextProps.obj.productDescription,
              img:nextProps.obj.productImage,
              name:nextProps.obj.productName,
              data:nextProps.obj
          })
        }
    }
  render() {
      const {classes , obj}=this.props
      const {name, img, description, num, price, data }=this.state
    return (
      <React.Fragment>
        <Grid  container justify="center" >
              <Grid item sm={10}>
                <Grid container justify="center">
                  <Grid style={{borderBottom: "1px solid #000",margin: "25px 0px"}} item sm={8}>
                  <Grid container justify='space-between' className={classes.cartContainer}>
                      <Grid item sm={3}>
                        <img style={{height:"150px"}} src={img} alt="image not found"></img>
                      </Grid>
                        <Grid item sm={6}>
                          <Typography variant="subtitle2">
                            {name}
                          </Typography>
                          <Typography variant="subtitle2">
                             {description}
                          </Typography>
                          <Grid>
                            <input style={{width:"25px"}} 
                              onChange={this.productNum} type="text"
                              value={num}/>
                          </Grid>
                          <Grid>
                            <button 
                            className={classes.button}
                            style={{
                              background:"#bf5858",
                            }}
                             onClick={()=>this.delete(data  && data)}>delete</button>
                             <button 
                              className={classes.button}
                              style={{
                                background:"green",
                                marginLeft:"10px"
                              }}
                             onClick={()=>this.update(data && data)}>update</button>
                          </Grid>
                          </Grid>
                      <Grid item sm={2}>
                        {price}
                      </Grid>
                  </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
      </React.Fragment>
    )
  }
}

export default withStyles (styles) (SingleComp);



