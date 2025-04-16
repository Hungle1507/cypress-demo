import { ENV } from '../support/env';
class Authentication {
    elements = {
      userNameTxt: () => cy.xpath('//input[@id="email"]'),
      passWordTxt: () => cy.xpath('//input[@id="password"]'), 
      signInBtn: () => cy.xpath('//button[@class="btn btn-primary btn-lg btn-block"]'),
      errorMsg: ()=> cy.xpath('//div[@class="alert alert-danger"]')
    };
  
    //==================================EVENTS==========================================
    /** Login by username and password */
    signIn(sUsername, sPassword) {
      cy.visit(ENV.testing.url), 
      this.elements.userNameTxt().type(sUsername);
      this.elements.passWordTxt().type(sPassword);
      this.elements.signInBtn().as('signInBtn').get('@signInBtn').click();
    }
    //** Verify error message */
    verifyErrorMsg(message) {
        this.elements.errorMsg().should('contain.text', message)
    }
}
export default new Authentication();
