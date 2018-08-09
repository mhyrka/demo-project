import React, { Component } from "react"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import { withStyles } from "@material-ui/core/styles"
import AddIcon from "@material-ui/icons/Add"
import Chip from "@material-ui/core/Chip"
import DatePickers from "./DatePickers"

import Task from "./Task"

import { inject, observer } from "mobx-react"

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
})

@inject("UiStore")
@observer
class Todos extends Component {
  state = {
    open: false
  }
  newTask = {}
  tasks = []
  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.UiStore.addTask(this.newTask)
    this.setState({ open: false })
  }

  handleChange = e => {
    e.preventDefault()
    this.newTask[`${e.target.id}`] = `${e.target.value}`
    console.log(this.newTask)
  }

  render() {
    const { UiStore } = this.props

    return (
      <div id="todos">
        <Button
          onClick={this.handleClickOpen}
          variant="extendedFab"
          aria-label="Delete"
          id="add-task"
          style={{ width: "200px", backgroundColor: "#A5D6A7" }}
        >
          <AddIcon />
          Add Task
        </Button>
        {UiStore.tasks.length > 0 ? (
          <div className="task-list" id="task-list">
            <Task tasks={this.tasks} />
          </div>
        ) : (
          <div className="task-list" id="task-list">
            there are no tasks
          </div>
        )}
        <Chip label="IN PROGRESS" id="in-progress" className="todo-labels" />
        <Chip label="COMPLETED" id="completed" className="todo-labels" />
        <Chip label="APPROVED" id="approved" className="todo-labels" />
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              style={{ color: "black" }}
              id="title"
              label="Title"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              onChange={this.handleChange}
            />
            <DatePickers changeDate={this.handleChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add Task
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(Todos)
