// Coloque aqui suas actions
export const ADD_USER_EMAIL = 'add_user_email';

export const addUserEmail = (email) => ({
  type: ADD_USER_EMAIL,
  email,
});
