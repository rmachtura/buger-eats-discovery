import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('cadastro', () => {

    before(function () {
        cy.log('Tudo aqui é executado uma unica vez antes de todos os casos de testes.')
    })

    after(function () {
        cy.log('Tudo aqui é executado uma unica vez depois de todos os casos de testes.')
    })

    beforeEach(function () {
        cy.log('Tudo aqui é executado sempre antes de todo o caso de teste.')
    })

    afterEach(function () {
        cy.log('Tudo aqui é executado sempre depois de todo o caso de teste.')
    })

    it('Usuário deve se tornar um entregador', function () {
        var deliver = signupFactory.deliver()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShoudBe(expectedMessage)
    })

    it('cpf incorreto', function () {
        var deliver = signupFactory.deliver()
        deliver.cpf = '123456789AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShoudBe('Oops! CPF inválido')
    })

    it('email incorreto', function () {
        var deliver = signupFactory.deliver()
        deliver.email = 'email.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShoudBe('Oops! Email com formato inválido.')
    })

    context('campos obrigatorios', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShoudBe(msg.output)
            })
        })
    })
})