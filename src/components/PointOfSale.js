import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import { inject, observer } from "mobx-react"
import SearchIcon from "@material-ui/icons/Search"

@inject("UiStore")
@observer
class PointOfSale extends Component {
  resetForm = () => {
    console.log("resetForm")
  }
  placeOrder = () => {
    console.log("place order")
  }
  handleChange = e => {
    e.preventDefault()
    // this.newOrder[`${e.target.id.toLowerCase()}`] = `${e.target.value}`
  }
  handlePriceChange = e => {
    this.props.UiStore.handlePriceChange(e.target.value)
  }

  handleQtyChange = e => {
    this.props.UiStore.handleQtyChange(e.target.value)
  }

  render() {
    return (
      <div id="point-of-sale">
        <div id="pos-form">
          <h1 style={{ marginBottom: "10px" }}>New Order</h1>
          <TextField
            required
            autoFocus
            margin="dense"
            className="pos-form-input"
            label="Account"
            id="Account"
            onChange={this.handleChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            className="pos-form-input"
            label="Ship To"
            id="Ship_To"
            onChange={this.handleChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            className="pos-form-input"
            label="Bill To"
            id="Bill_To"
            onChange={this.handleChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            className="pos-form-input"
            label="Product Name"
            id="Product_Name"
            onChange={this.handleChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            className="pos-form-input"
            label="Quantity"
            id="Quantity"
            onChange={this.handleQtyChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            className="pos-form-input"
            label="Price (USD)"
            id="Price"
            onChange={this.handlePriceChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            className="pos-form-input"
            label="Subtotal"
            id="Subtotal"
            value={this.props.UiStore.subtotal}
            onChange={this.handleChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            className="pos-form-input"
            label="Tax"
            id="Tax"
            onChange={this.handleChange}
            value={this.props.UiStore.tax}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            className="pos-form-input"
            label="Total"
            id="Total"
            onChange={this.handleChange}
            value={this.props.UiStore.grandTotal}
          />
          <Button onClick={this.resetForm} color="primary">
            Start Over
          </Button>
          <Button onClick={this.placeOrder} color="primary">
            Place Order
          </Button>
        </div>
        <div id="past-invoices">
          <h1 style={{ marginBottom: "15.5px" }}>Past Invoices</h1>
          <TextField id="name" label="Search" style={{ width: "45vw" }}>
            <SearchIcon />
          </TextField>
        </div>
      </div>
    )
  }
}

export default PointOfSale
