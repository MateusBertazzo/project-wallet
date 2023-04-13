// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_SUCCESS_API, REQUEST, ADD_EXPANSES } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
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
      ...state,
      currencies: payload,
    };

  case ADD_EXPANSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...payload }],
    };
  default:
    return state;
  }
};

export default wallet;
