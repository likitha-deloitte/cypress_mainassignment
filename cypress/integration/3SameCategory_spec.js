describe('Sign In spec', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Sign In With valid details', () => {
        cy.wait(3000)
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.wait(3000)
        cy.get('.panel > .header > :nth-child(2) > a').contains('Sign In').click()
        cy.get('#email').type('magentosoftwaretest@gmail.com')
        cy.wait(1000)
        cy.get('#pass').type('Magento@123')
        cy.wait(1000)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').contains("Sign In").should('be.visible').click();
        cy.wait(2000)
        cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, magento Software!');
        cy.wait(1000)
        cy.get('a').find('img').should('have.attr','src','https://magento.softwaretestingboard.com/pub/static/version1666447838/frontend/Magento/luma/en_US/images/logo.svg')
        cy.wait(1000)
        cy.get('#ui-id-4 > :nth-child(2)').contains('Women').trigger('mouseover')
        cy.wait(1000)
        cy.get('#ui-id-9').contains('Tops').trigger('mouseover')
        cy.wait(1000)
        cy.get('#ui-id-11 > span').contains('Jackets').click({force : true})
        cy.wait(1000)
        cy.get('[alt="Jade Yoga Jacket"]').click({force : true})
        cy.wait(1000)
        cy.get('#option-label-size-143-item-167').click({force : true})
        cy.wait(1000)
        cy.get('#option-label-color-93-item-50').click({force : true})
        cy.wait(1000)
        cy.get('#product-addtocart-button').contains('Add to Cart').click({force : true})
        cy.wait(1000)
        cy.get('.showcart').contains('My Cart').click({force : true})
        cy.wait(1000)
        cy.get('a.action.viewcart').contains('View and Edit Cart').click({force : true})
        cy.wait(1000)
        cy.get('.col.price > .price-excluding-tax > .cart-price > .price').should('have.text','$32.00')
        cy.wait(1000)
        cy.get('button.action.primary.checkout').contains('Proceed to Checkout').click({force : true})
        cy.wait(5000)
        cy.get('.new-address-popup > .action > span').click({force : true})
        cy.wait(3000)
        cy.get('input[name="street[0]"]').type('xyz')
        cy.wait(3000)
        cy.get('input[name="city"]').type('new york')
        cy.wait(2000)
        // cy.get('select[name="region_id"').select('43').should('have.value', '43')
        // cy.wait(3000)
        cy.get('input[name="postcode"]').type('12345-6789')
        cy.wait(2000)
        cy.get('input[name="telephone"]').type('9786543211')
        cy.wait(1000)
        cy.get('#shipping-save-in-address-book').click({force : true})
        cy.wait(4000)
        cy.get('.modal-footer > .primary').contains('Ship here').click({force : true})
        cy.wait(4000)
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click({force : true})
        cy.wait(3000)
        cy.get('.button').contains('Next').click({force : true})
        cy.wait(6000)
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').contains('Place Order').click({force : true})
        cy.wait(5000)
        cy.get('.base').should('have.text','Thank you for your purchase!')
        cy.wait(1000)
})
})