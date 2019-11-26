import React, { Component } from 'react'
import ProductCard from "../cards/Cards"
import productData from "../../products/data.json"
import { Grid } from "@material-ui/core"
 class ShowProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item sm={10}>
            <Grid container justify="center" spacing={3}>
            {
              productData.map((obj, index)=>(
                  <Grid item sm={4} key={index}>
                    <ProductCard data={obj}/>
                  </Grid>
              ))
            }
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
export default ShowProduct