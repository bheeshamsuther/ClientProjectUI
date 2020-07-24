import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Card.css";
import Typography from "@material-ui/core/Typography";

export default class Card extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Paper className="paper">
                <Typography variant="h5" component="h2" className="typography">
                  Order#000056
                </Typography>
                <img
                  className="product_img"
                  src="https://cdn.homeshopping.pk/product_images/h/283/41BhhUmNotL._AC_UL320_SR274_320___44513_zoom.jpg"
                />
                <br />
                <Typography style={{ fontWeight: "bold" }}>0002</Typography>

                <Typography>Copy of MSE 1007</Typography>

                <Typography>Location:Los Angles B</Typography>

                <Typography>UPC:868609000476</Typography>

                <Typography>Quantity:3</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
