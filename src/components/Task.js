import React from "react"

import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { inject, observer } from "mobx-react"

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}
@inject("UiStore")
@observer
class SimpleCard extends React.Component {
  // tasks = [this.props.tasks]

  render() {
    return (
      <div className="cards-container">
        {this.props.UiStore.tasks.map((task, index) => (
          <Card className="todo-cards" key={index}>
            <CardContent>
              <Typography variant="headline" component="h2">
                {task.title}
              </Typography>

              <Typography component="p">
                {task.description}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">due by: {task.date}</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(SimpleCard)
