import { PracticeForm } from "../pageObjects/PracticeForm";


describe('Practice-Form scenarios', () => {
    beforeEach(() => {
      PracticeForm.visit();
    });

    it('Practice-Form Scenario', () => {
    //NECESSARY INFORMATION
    PracticeForm.firstName.type('John');
    PracticeForm.lastName.type('Doe');
    PracticeForm.emailField.type('john.doe@example.com')
    PracticeForm.gender.click();
    PracticeForm.mobileNumber.type('1234567890')
    // PracticeForm.dateOfBirth

    PracticeForm.addfile

    PracticeForm.subjectsField.type('Economics')
    cy.press('Enter')
    PracticeForm.hobbiesMusic.click();
    PracticeForm.addressField
    .click()
    .type('House No. 247, Pocket 5, Sector 18{enter}')
    .type('Near Kendriya Vihar Apartments{enter}')
    .type('Dwarka, New Delhi - 110075');

    PracticeForm.stateField.click();

    PracticeForm.cityField


    });




});