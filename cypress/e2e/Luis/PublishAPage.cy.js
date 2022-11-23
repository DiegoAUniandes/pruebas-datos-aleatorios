import LoginPage from '../PageObject/LoginPage'
import CreatePagePage from '../PageObject/CreatePagePage'
import LandingPage from '../PageObject/LandingPage'

let config = require('../../config.json')

describe('Publish a page', () => {


  it('Create and publish page', () => {
    //Given
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    
    //When
    CreatePagePage.createPage(
        '¿Cómo ser feliz?',
        'Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás.'
    )

    //Then
    CreatePagePage.publishPage()
    cy.wait(2000)
    LandingPage.ValidatePage(
      '¿Cómo ser feliz?',
      'Aunque no puedes evitar muchas de las dificultades que encontrarás en la vida, puedes controlar cómo reaccionarás.',
      'como-ser-feliz'
  )
  })
})
