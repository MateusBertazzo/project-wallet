import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpanseId } from '../redux/actions/walletActions';

class Table extends Component {
  handleClick = (id) => {
    const { dispatch } = this.props;

    dispatch(removeExpanseId(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        { expenses.map((e) => (
          <tbody key={ e.id }>
            <tr>
              <td>{e.description}</td>
              <td>{e.tag}</td>
              <td>{e.method}</td>
              <td>{Number(e.value).toFixed(2)}</td>
              <td>{e.exchangeRates[e.currency].name}</td>
              <td>{Number(e.exchangeRates[e.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(e.exchangeRates[e.currency].ask)
                  * Number(e.value)).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.handleClick(e.id) }
                >
                  Excluir

                </button>
              </td>
            </tr>
          </tbody>
        )) }
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Table);
