import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

describe('Testa nossa tela raiz Login', () => {
  it('Testa se a aplicação começa no path correto /', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  it('Testa se os componentes estão renderizados na tela "Email/Password/Button"', () => {
    renderWithRouterAndRedux(<App />);

    const getEmail = screen.getByPlaceholderText(/digite seu email\.\.\./i);
    expect(getEmail).toBeDefined();

    const getPassword = screen.getByPlaceholderText(/digite sua senha\.\.\./i);
    expect(getPassword).toBeDefined();

    const getButton = screen.getByRole('button', { name: /entrar/i });
    expect(getButton).toBeDefined();
  });

  it('Testa funcionalidade do button ao carregar tela o esperado é que ele esteja desativado', () => {
    renderWithRouterAndRedux(<App />);
    const getButton = screen.getByRole('button', { name: /entrar/i });

    expect(getButton).toBeDefined();
    expect(getButton).toHaveAttribute('disabled');
  });

  it('Testa se o button é ativado, quando inserido corretamente as informações', () => {
    renderWithRouterAndRedux(<App />);

    const getEmail = screen.getByPlaceholderText(/digite seu email\.\.\./i);
    expect(getEmail).toBeDefined();

    const getPassword = screen.getByPlaceholderText(/digite sua senha\.\.\./i);
    expect(getPassword).toBeDefined();

    userEvent.type(getEmail, 'tryber@teste.com');
    userEvent.type(getPassword, '1234567');

    const getButton = screen.getByRole('button', { name: /entrar/i });
    expect(getButton).toBeDefined();
    expect(getButton).not.toHaveAttribute('disabled');
  });

  it('Testa se o button continua desativado, quando inserido incorretamente as informações', () => {
    renderWithRouterAndRedux(<App />);

    const getEmail = screen.getByPlaceholderText(/digite seu email\.\.\./i);
    expect(getEmail).toBeDefined();

    const getPassword = screen.getByPlaceholderText(/digite sua senha\.\.\./i);
    expect(getPassword).toBeDefined();

    userEvent.type(getEmail, 'tryberteste');
    userEvent.type(getPassword, '1234567');

    const getButton = screen.getByRole('button', { name: /entrar/i });
    expect(getButton).toBeDefined();
    expect(getButton).toHaveAttribute('disabled');
  });

  it('Testa se é redirecionado para o path /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const getEmail = screen.getByPlaceholderText(/digite seu email\.\.\./i);
    expect(getEmail).toBeDefined();

    const getPassword = screen.getByPlaceholderText(/digite sua senha\.\.\./i);
    expect(getPassword).toBeDefined();

    const getButton = screen.getByRole('button', { name: /entrar/i });
    expect(getButton).toBeDefined();

    userEvent.type(getEmail, 'tryber@teste.com');
    userEvent.type(getPassword, '1234567');
    userEvent.click(getButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
