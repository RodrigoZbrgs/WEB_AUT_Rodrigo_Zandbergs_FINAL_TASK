import { BasePage } from "./BasePage";

export class PracticeForm extends BasePage {
  static get url() {
    return "/#/";
  }

  static get firstName(){
    return cy.get('#firstName');
  }

  static get lastName(){
    return cy.get('#lastName');
  }

  static get emailField(){
    return cy.get('#userEmail');
  }

  static get gender(){
    return cy.get('#gender-radio-1');
  }
    
  static get mobileNumber() {
    return cy.get('#userNumber');
  }

  static get dateOfBirth() {
    return cy.get('#dateOfBirthInput');
  }

  static get selectMonth(){
    return cy.get("[class='react-datepicker__month-select']")
  }

  static get selectDay() {
    return cy.get('[class="react-datepicker__day react-datepicker__day--028"]')
  }

  static get selectYear() {
    return cy.get("[class='react-datepicker__year-select']")
  }


  static get subjectsField(){
    return cy.get('#subjectsInput');
  }

  static get hobbiesMusic() {
    return cy.get('#hobbies-checkbox-3');
  }

  static get addPictureFile(){
    return cy.get('#firstName');
  }

  static get addressField(){
    return cy.get('#currentAddress');
  }


  static addfile(filePath='cypress/fixtures/files/Untitled.png'){
     cy.get('#uploadPicture').selectFile(filePath);
  }

  static get stateField(){
    return cy.get('#state');
  }

  static get selectState() {
    return cy.get('#react-select-3-option-0')
  }

  static get cityField(){
    return cy.get('#react-select-4-input');
  }

  static get selectCity() {
    return cy.get('#react-select-4-option-0');
  }

  static get submitButton() {
    return cy.get('#submit')
  }

  static get informationTable(){
    return cy.get("[class='table table-dark table-striped table-bordered table-hover']")
  }
}