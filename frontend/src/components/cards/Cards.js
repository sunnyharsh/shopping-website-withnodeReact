import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import {addCart, fetchCart } from "../../store/actions/index.action"
import {connect} from "react-redux"
import { withRouter } from 'react-router-dom'
const styles = theme => ({
  card: {
    // maxWidth: 300,
    marginTop:40,
    pointer:"default !important"
  },
  media: {
    marginTop:12,
    height: 100,
    backgroundSize: "contain"
  },
  cardAction:{
    pointer:"default !important"
  }
});

class ProductCard extends PureComponent{
    constructor(props){
        super(props)
    }
    addToCart=(obj)=>{
        this.props.$addCart(obj)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps._addCart && nextProps._addCart.success){
            this.props.history.push('/cart')
        }
    }
    render(){
    const {classes,data ,_addCart} = this.props;
    return (
        <Card className={classes.card}>
        <CardActionArea className={classes.cardAction}>
            <CardMedia
            className={classes.media}
            image={data.productImage}
            title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle2" >
                    {data.productName}
                </Typography>
                <Typography gutterBottom variant="subtitle2" >
                {data.productDescription}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" onClick={()=>this.addToCart(data)} >
            Add to cart
            </Button>
        </CardActions>
        </Card>
    );
    }
}


const mapState = ({ addCart }) => {
    return {
        _addCart:addCart
    };
};
const mapDispatch = dispatchEvent => ({
    $addCart: (values) => dispatchEvent(addCart(values)),
    $fetchCart: () => dispatchEvent(fetchCart())

});
export default connect(
    mapState,
    mapDispatch
)(withStyles(styles)(withRouter(ProductCard)));