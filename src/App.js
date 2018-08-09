import React, { Component } from "react"

import { observer } from "mobx-react"
import Header from "./Header"
import NavTabs from "./NavTabs"
import CssBaseline from "@material-ui/core/CssBaseline"
import Footer from "./Footer"

@observer
class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Header />
        <NavTabs />
        <Footer />
      </div>
    )
  }
}

export default observer(App)
