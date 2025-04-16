import LoginPage from './login'
describe('Admin Portal - Login (Positive)', () => {
  LoginPage.TC_01(); //Successful Login with Valid Credentials
  LoginPage.TC_02(); //Login with Invalid Email Format
  LoginPage.TC_03();//Login with Valid Email but Incorrect Password
  LoginPage.TC_04();//Login with Empty Email Field
  })