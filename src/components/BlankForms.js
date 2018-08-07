import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import AddIcon from "@material-ui/icons/Add"
import Icon from "@material-ui/core/Icon"

const styles = {
  card: {
    maxWidth: 345,
    height: "350px",
    width: "345px",
    margin: "25px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}

function SimpleMediaCard(props) {
  const { classes } = props

  return (
    <div
      style={{
        backgroundColor: "#E4E8E1",
        height: "75vh",
        display: "flex",
        flexDirection: "row",

        marginRight: "45px",
        width: "100vw"
      }}
    >
      <Button variant="fab" aria-label="Add" className={classes.button} id="add-form">
        <AddIcon />
      </Button>
      <div style={{ marginLeft: "45px", display: "flex", flexDirection: "row", marginTop: "15px" }}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={require("../dummyFormPic.png")} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              New Product Registration
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Print
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={require("../dummyFormPic.png")} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Monthly Shipment Report
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Print
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={require("../dummyFormPic.png")} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              W2
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Print
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
