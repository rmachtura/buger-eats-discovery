
class SignupPage {

    go(){
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(entregador){
        cy.get('input[name="fullName"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.contains('.delivery-method li', entregador.entrega).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)
    }

    submit(){
        cy.get('.button-success').click()
    }

    modalContentShoudBe(expectedMessage){
        cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage)
        cy.get('div[class="swal2-actions"] button:first-of-type').click()
    }

    alertMessageShoudBe(expectedMessage){
        //cy.get('span[class="alert-error"]').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
}

export default new SignupPage;