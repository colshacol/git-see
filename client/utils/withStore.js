import React, { Component } from 'react'

export default (Store) => (Comp) => {
  return class extends Component {
    store = new Store(this.props)
    displayName = Comp.name

    render({ props, store, state } = this) {
      return <Comp store={store} {...props}/>
    }
  }
}
