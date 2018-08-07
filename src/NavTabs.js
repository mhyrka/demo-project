import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import BlankForms from "./components/BlankForms"
import Todos from "./components/Todos"

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    height: "80vh"
  }
})

class NavTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "white", width: "100vw" }}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            style={{ color: "black", display: "flex", justifyContent: "space-around", width: "100vw" }}
          >
            <Tab label="Todos" />
            <Tab label="Blank Forms" />
            <Tab label="Legal" />
            <Tab label="Calendar" />
            <Tab label="Point of Sale" href="#basic-tabs" />
            <Tab label="Contacts" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer style={{ height: "80vh", width: "100vw" }}>
            <Todos />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <BlankForms />
          </TabContainer>
        )}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    )
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavTabs)
