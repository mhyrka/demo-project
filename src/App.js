import React, { Component } from "react"
import { extendObservable } from "mobx"
import { inject, observer } from "mobx-react"
import Header from "./Header"
import NavTabs from "./NavTabs"
import CssBaseline from "@material-ui/core/CssBaseline"
import Footer from "./Footer"

@inject("UiStore")
@observer
class App extends Component {
  render() {
    const { UiStore } = this.props
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
