import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import PropTypes from "prop-types"

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

// DatePickers.propTypes = {
//   classes: PropTypes.object.isRequired
// }

class DatePickers extends Component {
  // const { classes } = props
  handleChange = e => {
    this.props.changeDate(e)
  }

  render() {
    return (
      <form noValidate>
        <TextField
          id="date"
          label="Complete By:"
          type="date"
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default DatePickers
