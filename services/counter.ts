import { makeAutoObservable } from 'mobx'

export const COUNTER = makeAutoObservable({
  count: 0,
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  },
}, {}, { name: 'Counter' })
