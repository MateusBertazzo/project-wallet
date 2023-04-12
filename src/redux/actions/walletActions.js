export const REQUEST_SUCCESS_API = 'REQUEST_SUCCESS_API';
export const REQUEST = 'REQUEST';
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
