
describe('home page', () => { //nome da suíte de testes. '() => {}' é uma função no Javascript
    it('app deve estar online', ()=>{ //it é a palavra reservada q define um caso de teste
        cy.viewport(1440, 900) //função do cypress para mudar a resolução
        cy.visit('https://buger-eats.vercel.app') //cy chama as funções do cypress, visit vai acessar a pagina indicada no argumento
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') //get obtém o elemento
        //should é uma sub função para validar (assert), neste caso, validar um texto 'have.text'
        //depois da virgula o parâmetro de qual texto deve ser validado
    }) 
}) 
