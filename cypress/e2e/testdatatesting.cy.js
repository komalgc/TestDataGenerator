// Install Faker plugin before running this script
// Run: npm install @faker-js/faker

const { faker } = require('@faker-js/faker');

describe('Account Registration', () => {
  it('should register a new account successfully', () => {
    // Generate fake data using Faker
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const phone = faker.phone.number('##########');
    const password = faker.internet.password(8);

    // Visit the registration page
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    // Fill in the registration form
    cy.get('#input-firstname').type(firstName);
    cy.get('#input-lastname').type(lastName);
    cy.get('#input-email').type(email);
    cy.get('#input-telephone').type(phone);
    cy.get('#input-password').type(password);
    cy.get('#input-confirm').type(password);

    // Agree to the privacy policy
    cy.get("input[name='agree']").check({force: true});

       // Submit the form
    cy.get("input[value='Continue']").click({force: true});

    // Verify successful registration
    cy.contains('Your Account Has Been Created!').should('be.visible');
  });
});
