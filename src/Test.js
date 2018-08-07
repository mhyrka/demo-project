import React from "react"
import { extendObservable } from "mobx"
import { inject, observer } from "mobx-react"

@inject("UiStore")
@observer
class Test extends React.Component {
  render() {
    const { UiStore } = this.props
    return <h2>{UiStore.employeeInfo[1].phone}</h2>
  }
}

export default Test
