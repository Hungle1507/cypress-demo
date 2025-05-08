import { ENV } from '../support/env';
class handleCheckBoxes {
 element = {
    checkboxFirst : () => cy.xpath('//input[@type="checkbox"]'), 
 }
//==================================EVENTS==========================================

/** Visit the checkboxes page */
visitCheckboxesPage() {
   cy.visit("https://the-internet.herokuapp.com/checkboxes");
}
    /** Check the first checkbox */
checkFirstCheckbox() {
        this.element.checkboxFirst().first().check({ force: true });

    }
}


export default new handleCheckBoxes();