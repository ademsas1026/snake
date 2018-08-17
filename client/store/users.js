import axios from 'axios';

const SET_USERS = 'SET_USERS';
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

const defaultUsers = [];

const setUsers = (users) => ({type: SET_USERS, users});
const addUser = user => ({type: ADD_USER, user});
const removeUser = id => {
  console.log("removeUser")
  return {type: REMOVE_USER, id}
};

export const getAllUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users');
    const users = res.data;
    dispatch(setUsers(users));
  } catch (err) {
    console.error(err);
  }
};

export const addOneUser = (user) => async dispatch => {
  try {
    const res = await axios.post('/api/users', user);
    const createdUser = res.data;
    dispatch(addUser(createdUser));
  } catch (err) {
    console.error(err);
  }
};

export const deleteOneUser = (id) => async dispatch => {
  try {
    await axios.delete(`/api/users/${id}`);
    dispatch(removeUser(id));
  }
  catch (err) {
    console.error(err);
  }
}

export default function(state = defaultUsers, action) {
  switch (action.type) {
    case SET_USERS:
    return action.users;
    case ADD_USER:
      return [...state, action.user];
    case REMOVE_USER:
      console.log("remove")
      console.log(state.slice().filter((user) => user.id !== action.id));
      return state.slice().filter((user) => user.id !== action.id);
    default:
      return state;
  }
}

