import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApiCurrencies } from '../redux/actions/walletActions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCurrencies());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" data-testid="value-input" />
        </label>

        <label htmlFor="description">
          <input id="description" data-testid="description-input" />
        </label>

        <select data-testid="currency-input">
          Moeda:
          { currencies.map((currencie) => (
            <option key={ currencie } value={ currencie }>{ currencie }</option>
          )) }
        </select>

        <select data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <select data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
