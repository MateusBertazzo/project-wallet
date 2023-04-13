export const REQUEST_SUCCESS_API = 'REQUEST_SUCCESS_API';
export const REQUEST = 'REQUEST';
export const ADD_EXPANSES = 'ADD_EXPANSE';
export const REMOVE_EXPENSE_ID = 'REMOVE_EXPENSE_ID';

const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const firstRequest = () => ({
  type: REQUEST,
});

const requestSuccessApi = (currencies) => ({
  type: REQUEST_SUCCESS_API,
  payload: currencies,
});

export const fetchApiCurrencies = () => async (dispatch) => {
  dispatch(firstRequest());
  const response = await fetch(API_URL);
  const data = await response.json();

  const dataFiltred = Object.keys(data).filter((currency) => currency !== 'USDT');
  dispatch(requestSuccessApi(dataFiltred));
};

const addExpanses = (obj) => ({
  type: ADD_EXPANSES,
  payload: obj,
});

export const removeExpanseId = (id) => ({
  type: REMOVE_EXPENSE_ID,
  payload: id,
});

export const fetchAndAddExpense = (expenseObj) => async (dispatch) => {
  const { value, currency, method, tag, description } = expenseObj;

  const response = await fetch(API_URL);
  const data = await response.json();

  const expense = {
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates: data,
  };
  dispatch(addExpanses(expense));
};
