import { action, observable, extendObservable, computed, autorun } from "mobx"
import { inject, observer } from "mobx-react"

class UiStore {
  @observable selectedCategory = ""
  @observable tasks = []
  @observable test = ["this", "is", "a", "test"]

  @action
  addTask = task => {
    this.tasks.push(task)
    console.log(this.tasks)
  }
}

const store = new UiStore()
export default store
