export const LOGIN_DATA = {
    VALID: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
      description: 'Successful Login with Valid Credentials'
    },
    INVALID_EMAIL: {
      email: 'eve.holt@reqr',
      password: 'cityslicka',
    },
    INVALID_PASSWORD: {
      email: 'eve.holt@reqres.in',
      password: 'cka',
    },
    EMPTY_EMAIL: {
      email: ' ',
      password: 'cityslicka',
      errorMsg: 'There was a problem with your login.',
    }
  };