describe('Categorias', () => {
    let nomeCategoria = 'Categotia';

    before(() => {
        cy.Login();

        cy.contains('Produtos').click();

        cy.get('[href="/produtos/categorias"]').click();
        cy.get('header > strong').should('have.text', 'Categorias');
    });

    it('Cadastrando categoria', () => {
        cy.contains('+').click();

        cy.get('#category').focus().type(nomeCategoria);
        cy.get('#mui-component-select-imageType').click();
        cy.contains('Font Awesome Solid').click();

        cy.get('#textIcon').focus().type('cube');

        cy.get(
            '[style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 7.5px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-handle'
        ).click();

        cy.contains('Salvar').click();

        // Validar se realmente foi cadastrado.
        cy.contains(nomeCategoria).should('exist');
    });

    it('Editando categoria', () => {
        cy.get('tr:last')
            .should('contain', nomeCategoria)
            .contains('Editar')
            .click();

        nomeCategoria += ' mudado';

        cy.get('#category').focus().clear().type(nomeCategoria);

        cy.get('#textIcon').focus().clear().type('star');

        cy.get(
            '[style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 7.5px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-handle'
        ).click();

        cy.contains('Salvar').click();

        cy.contains(nomeCategoria).should('exist');
    });

    it('Excluindo categoria', () => {
        cy.log('Agora eu termino');

        cy.get('tr:last')
            .should('contain', nomeCategoria)
            .contains('Excluir')
            .click();

        cy.contains(nomeCategoria).should('not.exist');
    });
});
