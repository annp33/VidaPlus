describe('Teste de Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.visit('cadastro.html')
    cy.get('#nome').type('Ana Paula')
    cy.get('#email').type('ana@email.com.br')
    cy.get('#telefone').type('11111111')
    cy.get('#endereco').type('Taguatinga')
    cy.get('#senha').type('12345')
    cy.get('.button')
  })
})


describe('Teste de Login', () => {
    it('Login com sucesso', () => {
    cy.visit('login.html')
    cy.get('#email_login').type('ana@email.com.br')
    cy.get('#senha_login').type('12345')
    cy.get('.button').click()
  })
})

describe('Teste de Login', () => {
    it('Login com Falha', () => {
    cy.visit('login.html')
    cy.get('#email_login').type('ana@email.com.br')
    cy.get('#senha_login').type('123')
    cy.get('.button').click()
  })
})
