import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getAllUsers, addOneUser, deleteOneUser } from '../store';

class Users extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addUser({name: this.state.name});
    this.setState({name: ''});
  }

  handleChange(evt) {
    this.setState({name: evt.target.value});
  }

  removeUser(id) {
    this.props.deleteUser(id);
  }

  render(){
    const users = this.props.users;
    console.log(users);
    return (
      users &&
      <div>
        <p> USERS: </p>
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <button onClick = {() => this.removeUser(user.id)}> x </button>
              </div>
            );
          })}
        </div>
        <form onSubmit = {this.handleSubmit}>
          <input
            type = "text"
            name = "name"
            placeholder = "name"
            value = {this.state.name}
            onChange = {this.handleChange}
          />
          <input type = "submit" value = "submit"/>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.users
  };
};

const mapDispatch = dispatch => {
  return {
    getUsers() {
      dispatch(getAllUsers());
    },
    addUser(user) {
      dispatch(addOneUser(user));
    },
    deleteUser(id) {
      dispatch(deleteOneUser(id));
    }
  };
};

export default connect(mapState, mapDispatch)(Users);
