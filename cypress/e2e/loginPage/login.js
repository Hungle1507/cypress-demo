import Authentication from '../../pages/authentication'
import { LOGIN_DATA } from '../../support/loginData';


const TC_01 = () => {
  it('Successful Login with Valid Credentials', () => {
    Authentication.signIn(LOGIN_DATA.VALID.email, LOGIN_DATA.VALID.password)
  });
};

const TC_02 = () => {
  it('Login with Invalid Email Format', () => {
    Authentication.signIn(LOGIN_DATA.INVALID_EMAIL.email, LOGIN_DATA.VALID.password)

  });
};
const TC_03 = () => {
  it('Login with Valid Email but Incorrect Password', () => {
    Authentication.signIn(LOGIN_DATA.VALID.email, LOGIN_DATA.INVALID_PASSWORD.password)
  });
};
const TC_04 = () => {
  it('Login with Empty Email Field', () => {
    Authentication.signIn(LOGIN_DATA.EMPTY_EMAIL.email, LOGIN_DATA.INVALID_PASSWORD.password)
    Authentication.verifyErrorMsg(LOGIN_DATA.EMPTY_EMAIL.errorMsg)
  });
};

export default {
  TC_01,
  TC_02,
  TC_03,
  TC_04
};