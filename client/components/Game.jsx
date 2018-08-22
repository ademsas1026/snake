import React, {Component} from 'react'
import { Board } from './index'


export default class Game extends Component {

  constructor() {
    super();
    this.state = {
      position: [[0, 0]],
      board: new Array(new Array(4).fill(0), new Array(4).fill(0), new Array(4).fill(0), new Array(4).fill(0)),
      currDirection: 'R'
    }
    this.play = this.play.bind(this)
    this.getNewHead = this.getNewHead.bind(this)
  }

  async componentDidMount(){
    await this.play()
  }
  
  async play(){
    let { position, board } = this.state, oldHead = position[0], newHead
    console.log('this is position: ', position, 'this is board: ', board)
    while(oldHead[0] < board[0].length &&
        oldHead[1] < board.length &&
        !position.slice(1).includes(oldHead)
      ) {
        oldHead = position[0]
        await this.setState(prevState => {
          prevState.position.pop() // removes tail from position list
          { position: prevState.position }
        })
        newHead = this.getNewHead()
        position.unshift(newHead) // adds new head to position list
      }
      this.setState({ play: false })
  }

  getNewHead() {
    const { position } = this.state
    console.log('getting new head position')
    return position
    // if (currDirection === 'L') newHead = [position[0][0] - 1, position[0][1]]
  }


  render(){
   
    const { position } = this.state
    console.log('this is position', position)
    return (
      <div>
        <Board />
      </div>
    )
  }
}


