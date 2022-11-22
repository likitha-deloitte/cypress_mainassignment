describe('Sign In spec', () => {
     //console.log(makeid(5));
     it('Incorrect Email, Password', () => {
         cy.visit('https://magento.softwaretestingboard.com/')
         cy.wait(3000)
         cy.get('.panel > .header > :nth-child(2) > a').contains('Sign In').click()
         cy.get('#email').type('Magento')
         cy.wait(1000)
         cy.get('#pass').type('Software')
         cy.wait(1000)
         cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').contains("Sign In").should('be.visible').click();
         cy.wait(2000)
         cy.get('#email-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
         cy.wait(1000)
     })
     
     it('Empty Password', () => {cy.visit('https://magento.softwaretestingboard.com/')
     cy.wait(3000)
     cy.get('.panel > .header > :nth-child(2) > a').contains('Sign In').click()
     cy.get('#email').type('Magentosoftware123@gmail.com')
     cy.wait(1000)
     cy.get('#pass').type(' ')
     cy.wait(1000)
     cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').contains("Sign In").should('be.visible').click();
     cy.wait(2000)
     cy.get('#pass-error').should('have.text', 'This is a required field.');
     cy.wait(1000)
 })
 
 it('Empty Email', () => {
     cy.visit('https://magento.softwaretestingboard.com/')
     cy.wait(3000)
     cy.get('.panel > .header > :nth-child(2) > a').contains('Sign In').click()
     cy.get('#email').type(' ')
     cy.wait(1000)
     cy.get('#pass').type('Magento@12')
     cy.wait(1000)
     cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').contains("Sign In").should('be.visible').click();
     cy.wait(2000)
     cy.get('#email-error').should('have.text', 'This is a required field.');
     cy.wait(1000)
 })
 
 it('Empty Email & Password', () => {
     cy.visit('https://magento.softwaretestingboard.com/')
     cy.wait(3000)
     cy.get('.panel > .header > :nth-child(2) > a').contains('Sign In').click()
     cy.get('#email').type(' ')
     cy.wait(1000)
     cy.get('#pass').type(' ')
     cy.wait(1000)
     cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').contains("Sign In").should('be.visible').click();
     cy.wait(2000)
     cy.get('#email-error').should('have.text', 'This is a required field.');
     cy.wait(1000)
     cy.get('#pass-error').should('have.text', 'This is a required field.');
     cy.wait(1000)
 })
 
 it('Sign In With valid details', () => {
     cy.visit('https://magento.softwaretestingboard.com/')
     cy.wait(3000)
     cy.get('.panel > .header > :nth-child(2) > a').contains('Sign In').click()
     cy.get('#email').type('magentosoftwaretest@gmail.com')
     cy.wait(1000)
     cy.get('#pass').type('Magento@123')
     cy.wait(1000)
     cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').contains("Sign In").should('be.visible').click();
     cy.wait(3000)
     cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, magento Software!');
     cy.wait(3000)
     cy.get('a').find('img').should('have.attr','src','https://magento.softwaretestingboard.com/pub/static/version1666447838/frontend/Magento/luma/en_US/images/logo.svg')
     cy.wait(1000)
 })
 })