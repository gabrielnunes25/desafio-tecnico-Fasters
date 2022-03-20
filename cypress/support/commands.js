// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//--------------------------------------------------------

// https://on.cypress.io/custom-commands

Cypress.Commands.add('Login', () => {
    cy.visit('https://fastgv-front-vercel.vercel.app');

    cy.get('#email').focus().type('QA.eteste');
    cy.get('#password').focus().type('123456');
    cy.contains('Entrar').click();

    cy.get('#combo-box-demo').focus().type('Loja');
    cy.get('#combo-box-demo-option-0').click();
    cy.contains('Entrar').click();
});

Cypress.Commands.add('Gerador_nome', length => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
});

Cypress.Commands.add('Gerador_telefone', length => {
    var result = '';
    var characters = '123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return '99' + result;
});

Cypress.Commands.add('Gerador_cnpj', () => {
    var resultado;

    function gera_random(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
    }

    function mod(dividendo, divisor) {
        return Math.round(
            dividendo - Math.floor(dividendo / divisor) * divisor
        );
    }

    var n = 9;
    var n1 = gera_random(n);
    var n2 = gera_random(n);
    var n3 = gera_random(n);
    var n4 = gera_random(n);
    var n5 = gera_random(n);
    var n6 = gera_random(n);
    var n7 = gera_random(n);
    var n8 = gera_random(n);
    var n9 = 0; //gera_random(n);
    var n10 = 0; //gera_random(n);
    var n11 = 0; //gera_random(n);
    var n12 = 1; //gera_random(n);
    var d1 =
        n12 * 2 +
        n11 * 3 +
        n10 * 4 +
        n9 * 5 +
        n8 * 6 +
        n7 * 7 +
        n6 * 8 +
        n5 * 9 +
        n4 * 2 +
        n3 * 3 +
        n2 * 4 +
        n1 * 5;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;
    var d2 =
        d1 * 2 +
        n12 * 3 +
        n11 * 4 +
        n10 * 5 +
        n9 * 6 +
        n8 * 7 +
        n7 * 8 +
        n6 * 9 +
        n5 * 2 +
        n4 * 3 +
        n3 * 4 +
        n2 * 5 +
        n1 * 6;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;
    resultado =
        '' +
        n1 +
        n2 +
        n3 +
        n4 +
        n5 +
        n6 +
        n7 +
        n8 +
        n9 +
        n10 +
        n11 +
        n12 +
        d1 +
        d2;
    return resultado;
});

Cypress.Commands.add('Gerador_numeros', length => {
    var result = '';
    var characters = '123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
});

Cypress.Commands.add('Gerador_cpf', () => {
    function randomiza(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
    }
    function mod(dividendo, divisor) {
        return Math.round(
            dividendo - Math.floor(dividendo / divisor) * divisor
        );
    }
    var comPontos = false; // TRUE para ativar e FALSE para desativar a pontuação.
    var n = 9;
    var n1 = randomiza(n);
    var n2 = randomiza(n);
    var n3 = randomiza(n);
    var n4 = randomiza(n);
    var n5 = randomiza(n);
    var n6 = randomiza(n);
    var n7 = randomiza(n);
    var n8 = randomiza(n);
    var n9 = randomiza(n);
    var d1 =
        n9 * 2 +
        n8 * 3 +
        n7 * 4 +
        n6 * 5 +
        n5 * 6 +
        n4 * 7 +
        n3 * 8 +
        n2 * 9 +
        n1 * 10;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;
    var d2 =
        d1 * 2 +
        n9 * 3 +
        n8 * 4 +
        n7 * 5 +
        n6 * 6 +
        n5 * 7 +
        n4 * 8 +
        n3 * 9 +
        n2 * 10 +
        n1 * 11;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;
    var retorno = '';
    var cpf = 'vazio';
    if (comPontos)
        cpf =
            '' +
            n1 +
            n2 +
            n3 +
            '.' +
            n4 +
            n5 +
            n6 +
            '.' +
            n7 +
            n8 +
            n9 +
            '-' +
            d1 +
            d2;
    else cpf = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
    return cpf;
});
