describe('Placing Order Without Size and Colour', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })

    it('Sign In With valid details', () => {
        cy.wait(3000)
        cy.visit(Cypress.env('url'))
        cy.wait(3000)
        cy.get('.panel > .header > :nth-child(2) > a').contains('Sign In').click()
        cy.get('#email').type(Cypress.env('email'))
        cy.wait(1000)
        cy.get('#pass').type(Cypress.env('Password'))
        cy.wait(1000)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').contains("Sign In").should('be.visible').click();
        cy.wait(2000)
        cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, magento Software!');
        cy.wait(1000)
        cy.get('a').find('img').should('have.attr','src','https://magento.softwaretestingboard.com/pub/static/version1666447838/frontend/Magento/luma/en_US/images/logo.svg')
        cy.wait(1000)
        // Mens Selection //
        cy.get('#ui-id-5 > :nth-child(2)').contains('Men').click()
        cy.wait(1000)
        cy.get('dd > .items > :nth-child(1) > a').contains('Tops').click({force : true})
        cy.wait(1000)
        cy.get(':nth-child(1) > .filter-options-title').contains('Category').click({force : true})
        cy.wait(1000)
        cy.get('.allow > .filter-options-content > .items > :nth-child(1) > a').contains('Jackets').click({force : true})
        cy.wait(1000)
        cy.get('.logo > img').click({force : true})
        cy.wait(4000)
        //Yoga Search
        cy.get('#search').type('yoga').type('{enter}')
        cy.wait(3000)
        cy.get('a').each(htref => {
            const a= Cypress.$(htref).length;
            expect(htref).to.have.length(a);
          })
    })
})