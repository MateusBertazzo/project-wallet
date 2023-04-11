// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER_EMAIL } from '../actions/userActions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, email } = action;

  switch (type) {
  case ADD_USER_EMAIL:
    return {
      ...state,
      email,
    };
  default:
    return state;
  }
};

export default userReducer;
