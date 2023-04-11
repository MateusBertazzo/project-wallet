import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUserEmail } from '../redux/actions/userActions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  validateForm = () => {
    const { email, password } = this.state;

    // Regex pronta da internet
    const regexEmail = /[a-z0-9]+@[a-z0-9]+\.com/;
    const emailCheck = regexEmail.test(email);

    const MAX_PASSWORD = 5;
    const passwordCheck = password.length > MAX_PASSWORD;

    const checkButton = emailCheck && passwordCheck;

    this.setState({
      disabled: !checkButton,
    });
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;

    dispatch(addUserEmail(email));
    history.push('/carteira');
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.validateForm());
  };

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <form action="">
          <h1>Faça seu Login</h1>
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="email-input"
            placeholder="Digite seu email..."
            onChange={ this.handleChange }
          />

          <input
            type="password"
            name="password"
            value={ password }
            data-testid="password-input"
            placeholder="Digite sua senha..."
            onChange={ this.handleChange }
          />

          <button
            type="button"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
