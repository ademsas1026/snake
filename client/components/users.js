import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getCurrentUser } from '../store';

class Users extends Component {

  constructor(){
    super()
    state = {
      users: []
    }
  }

  componentDidMount(){
    //get the users and set on state
  }

  render(){
    const users = this.props.users
    return (
      <div>
        {users.map((user) => {
          return (
            <p key={user.id}>{user.name}</p>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.user.users
  }
}



export default connect(mapState)(Users)