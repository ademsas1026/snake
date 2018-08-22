import React, { Component } from 'react'

export default class Board extends Component {
  constructor(){
    super()
    this.state = {
      apples: [[0, 0]]
    }
  }

  render(){
    const { matrix } = this.props
    console.log("the matrixxxxx: ", matrix)
    return (
      <div>
        <h1>this is the board</h1>
      </div>
    )
  }
}