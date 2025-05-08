import handleCheckboxes from "../../pages/handleCheckboxes";

const TC_checkBox_01 = () => {
  it('Verify the user can click to checkbox 1 successfully', () => {
    handleCheckboxes.visitCheckboxesPage();
    handleCheckboxes.checkFirstCheckbox();
    handleCheckboxes.element.checkboxFirst().should('be.checked');
  });
};

export default {
  TC_checkBox_01
}