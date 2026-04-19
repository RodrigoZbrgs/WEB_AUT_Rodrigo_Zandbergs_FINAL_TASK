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

    //DATE
    PracticeForm.dateOfBirth.click();
    PracticeForm.selectDate.click();

    //FILE UPLOAD
    PracticeForm.addfile();

    //HOBBY AND SUBJECT
    PracticeForm.subjectsField.type('Economics')
    cy.press('Enter');
    PracticeForm.hobbiesMusic.click();

    //ADDRESS
    PracticeForm.addressField
    .click()
    .type('House No. 247, Pocket 5, Sector 18{enter}')
    .type('Near Kendriya Vihar Apartments{enter}')
    .type('Dwarka, New Delhi - 110075');

    //STATE AND CITY
    PracticeForm.stateField.click();
    PracticeForm.selectState.click();

    PracticeForm.cityField.click();
    PracticeForm.selectCity.click();

    //SUBMIT
    PracticeForm.submitButton.click();


    //VALIDATION
    PracticeForm.informationTable
    .contains('John Doe')
    .should('be.visible');
     PracticeForm.informationTable
    .contains('john.doe@example.com')
        .should('be.visible');
     PracticeForm.informationTable
    .contains('Male')
        .should('be.visible');
     PracticeForm.informationTable
    .contains('1234567890')
        .should('be.visible');
     PracticeForm.informationTable
    .contains('30 April,2026')
        .should('be.visible');
     PracticeForm.informationTable
    .contains('Economics')
        .should('be.visible');
     PracticeForm.informationTable
    .contains('Music')
        .should('be.visible');
     PracticeForm.informationTable
    .contains('Untitled.png')
        .should('be.visible');
     PracticeForm.informationTable
    .contains('NCR Delhi')
        .should('be.visible');

    });

});