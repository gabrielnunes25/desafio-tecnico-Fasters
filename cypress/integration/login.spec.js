describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://fastgv-front-vercel.vercel.app');
    });

    it('Bem sucedido', () => {
        cy.get('#email').focus().type('QA.eteste');
        cy.get('#password').focus().type('123456');
        cy.contains('Entrar').click();

        cy.contains('Autenticação realizada com sucesso.').should('exist');
    });

    it('Senha errada', () => {
        cy.get('#email').focus().type('QA.eteste');
        cy.get('#password').focus().type('errada');
        cy.contains('Entrar').click();

        cy.contains('Autenticação realizada com sucesso.').should('not.exist');
    });

    it('Usuário errada', () => {
        cy.get('#email').focus().type('QA.teste');
        cy.get('#password').focus().type('123456');
        cy.contains('Entrar').click();

        cy.contains('Autenticação realizada com sucesso.').should('not.exist');
    });
});
