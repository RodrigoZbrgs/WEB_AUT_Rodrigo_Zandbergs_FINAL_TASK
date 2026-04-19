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

  static get addfile(){
    return cy.get('#uploadPicture').selectfile('fixtures/files/Untitled.png');
  }

  static get stateField(){
    return cy.get('#react-select-3-input');
  }

  static get cityField(){
    return cy.get('#react-select-4-live-region');
  }

}