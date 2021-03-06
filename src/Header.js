import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import logo from "./newLogo.png"
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function Header(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#B71C1C" }}>
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            className={classes.flex}
            style={{ display: "flex", alignItems: "center", height: "90px" }}
          >
            <img src={logo} alt="logo" className="header-logo" />
            {/* <h1 id="main-logo">eCOMPLI™</h1>
            <h2>online beverage compliance</h2> */}
          </Typography>

          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
