import React, { Component } from "react"
import Calendar from "react-big-calendar"
import moment from "moment"

// import "./App.css"
import "react-big-calendar/lib/css/react-big-calendar.css"

Calendar.setLocalizer(Calendar.momentLocalizer(moment))

class MyCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Sales Meeting"
      }
    ]
  }

  render() {
    return (
      <div className="MyCalendar" style={{ height: "77.5vh", overflow: "scroll" }}>
        <Calendar defaultDate={new Date()} defaultView="month" events={this.state.events} style={{ height: "100vh" }} />
      </div>
    )
  }
}

export default MyCalendar
