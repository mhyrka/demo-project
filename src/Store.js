import { action, observable, computed } from "mobx"

class UiStore {
  @observable selectedCategory = ""
  @observable tasks = []

  @observable price = 0
  @observable quantity = 0

  @computed
  get subtotal() {
    if (this.price !== 0 && this.quantity !== 0) {
      return `$${this.price * this.quantity}`
    } else {
      return `$` + 0
    }
  }

  @computed
  get tax() {
    if (this.price !== 0 && this.quantity !== 0) {
      return `$${this.price * this.quantity * 0.07625}`
    } else {
      return `$` + 0
    }
  }

  @computed
  get grandTotal() {
    if (this.price !== 0 && this.quantity !== 0) {
      return `$${this.price * this.quantity + this.price * this.quantity * 0.07625}`
    } else {
      return `$` + 0
    }
  }

  @action
  addTask = task => {
    this.tasks.push(task)
  }

  @action
  handlePriceChange = e => {
    this.price = parseInt(e)
  }

  @action
  handleQtyChange = e => {
    this.quantity = parseInt(e)
  }
}

const store = new UiStore()
export default store
