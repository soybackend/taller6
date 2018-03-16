/*
describe('Los estudiantes login', function() {
  it('Visits los estudiantes and fails at login', function() {
    cy.visit('https://losestudiantes.co')    
    cy.contains('Cerrar').click()
    cy.contains('Ingresar').click()    
    cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
    cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
    cy.get('.cajaLogIn').contains('Ingresar').click()    
    cy.contains('Elcorreo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')    
  })
})*/

describe('Los estudiantes login ok', function() {
  it('Visits los estudiantes and make a sucessful login', function() {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    cy.contains('Ingresar').click()
    cy.screenshot()
    cy.get('.cajaLogIn').find('input[name="correo"]').click().type("j_1913@hotmail.com")
    cy.get('.cajaLogIn').find('input[name="password"]').click().type("taller2depruebas")
    cy.get('.cajaLogIn').contains('Ingresar').click()
    cy.get('#cuenta').click()
    cy.screenshot()
    cy.contains('Salir').should('be.visible')    
  })
})

describe('Busqueda de profesores', function() {
  it('Visits los estudiantes and make a sucessful login', function() {
    cy.visit('https://losestudiantes.co')    
    cy.contains('Cerrar').click()
    cy.get('.buscador').click()
    cy.screenshot()
    cy.get('.buscador').find('input[role="combobox"]').type('Mario Villamizar', { force: true })
    cy.get('.Select-menu-outer').should('be.visible')
    cy.get('.Select-menu-outer').should('contain', 'Mario Villamizar')
    cy.screenshot()
  })
})

describe('Visitar perfil de profesor', function() {
  it('Visits los estudiantes and make a sucessful login', function() {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    cy.get('.buscador').click()
    cy.screenshot()
    cy.get('.buscador').find('input[role="combobox"]').type('Mario Villamizar', { force: true })
    cy.get('.Select-menu-outer').contains("Mario Villamizar").click()
    cy.url().should('eq', 'https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-villamizar')
    cy.get('h1').should('contain', 'Mario Villamizar')
    cy.screenshot()
  })
})

describe('Filtrar por materia', function() {
  it('Visits los estudiantes and make a sucessful login', function() {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    cy.get('.buscador').click()
    cy.get('.buscador').find('input[role="combobox"]').type('Mario Villamizar', { force: true })
    cy.screenshot()
    cy.get('.Select-menu-outer').contains("Mario Villamizar").click()
    cy.url().should('eq', 'https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-villamizar')
    cy.get('h1').contains('Mario Villamizar')
    cy.get('.materias').find('input[type=checkbox]').first().check()
    cy.get('.materias').find('a').first().then(($check) => {
    cy.get('.labelHover').first().should('contain', $check.text())
    cy.screenshot()
    })
  })
})
