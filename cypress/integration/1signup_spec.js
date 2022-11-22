describe('Sign up spec', () => {
    
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
console.log(makeid(5));
it('Incorrect Email', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(3) > a').contains('Create an Account').click()
    cy.get('#firstname').type('Magento')
    cy.wait(1000)
    cy.get('#lastname').type('Software')
    cy.wait(1000)
    cy.get('#is_subscribed').check()
    cy.wait(1000)
    cy.get('#email_address').type('Magentosoftware')
    cy.wait(1000)
    cy.get('#password').type('Magento@12')
    cy.get('#password-confirmation').type('Magento@12')
    cy.wait(1000)
    cy.get('div.primary > .action').contains("Create an Account").should('be.visible').click();
    cy.wait(2000)
    cy.get('#email_address-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
    cy.wait(1000)
})

it('Empty Email', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(3) > a').contains('Create an Account').click()
    cy.get('#firstname').type('Magento')
    cy.wait(1000)
    cy.get('#lastname').type('Software')
    cy.wait(1000)
    cy.get('#is_subscribed').check()
    cy.wait(1000)
    cy.get('#email_address').type(' ')
    cy.wait(1000)
    cy.get('#password').type('Magento@12')
    cy.get('#password-confirmation').type('Magento@12')
    cy.wait(1000)
    cy.get('div.primary > .action').contains("Create an Account").should('be.visible').click();
    cy.wait(2000)
    cy.get('#email_address-error').should('have.text', 'This is a required field.');
    cy.wait(1000)
})

it('Empty Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(3) > a').contains('Create an Account').click()
    cy.get('#firstname').type('Magento')
    cy.wait(1000)
    cy.get('#lastname').type('Software')
    cy.wait(1000)
    cy.get('#is_subscribed').check()
    cy.wait(1000)
    cy.get('#email_address').type('Magentosoftware@gmail.com')
    cy.wait(1000)
    cy.get('#password').type(' ')
    cy.get('#password-confirmation').type(' ')
    cy.wait(1000)
    cy.get('div.primary > .action').contains("Create an Account").should('be.visible').click();
    cy.wait(2000)
    cy.get('#password-error').should('have.text', 'This is a required field.');
    cy.wait(1000)
    cy.get('#password-confirmation-error').should('have.text', 'This is a required field.');
    cy.wait(1000)
})

it('Empty Email & Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(3) > a').contains('Create an Account').click()
    cy.get('#firstname').type('Magento')
    cy.wait(1000)
    cy.get('#lastname').type('Software')
    cy.wait(1000)
    cy.get('#is_subscribed').check()
    cy.wait(1000)
    cy.get('#email_address').type(' ')
    cy.wait(1000)
    cy.get('#password').type(' ')
    cy.get('#password-confirmation').type(' ')
    cy.wait(1000)
    cy.get('div.primary > .action').contains("Create an Account").should('be.visible').click();
    cy.wait(2000)
    cy.get('#password-error').should('have.text', 'This is a required field.');
    cy.wait(1000)
    cy.get('#password-confirmation-error').should('have.text', 'This is a required field.');
    cy.wait(1000)
})

it('Signup With valid details', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.wait(1000)
    cy.get('.panel > .header > :nth-child(3) > a').contains('Create an Account').click()
    cy.wait(1000)
    cy.get('#firstname').type('Magento')
    cy.wait(1000)
    cy.get('#lastname').type('Software')
    cy.wait(1000)
    cy.get('#is_subscribed').check()
    cy.wait(1000)
    cy.get('#email_address').type(makeid(6) + '@gmail.com')
    cy.wait(1000)
    cy.get('#password').type('Magento@12')
    cy.wait(1000)
    cy.get('#password-confirmation').type('Magento@12')
    cy.wait(1000)
    cy.get('div.primary > .action').contains("Create an Account").should('be.visible').click();
    cy.wait(1000)
    cy.get('.message-success').should('have.text', '\nThank you for registering with Fake Online Clothing Store.\n');
    cy.wait(1000)
})
})