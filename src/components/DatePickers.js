import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"

class DatePickers extends Component {
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
