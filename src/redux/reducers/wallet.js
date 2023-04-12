// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_SUCCESS_API, REQUEST } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case REQUEST:
    return {
      ...state,
    };
  case REQUEST_SUCCESS_API:
    return {
      currencies: payload,
    };
  default:
    return state;
  }
};

export default wallet;
