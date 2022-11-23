import { LoginPage } from '../PageObject/login-page.js';
import { PagesPage } from '../PageObject/pages-page.js';
import { LabsPage } from '../PageObject/labs-page.js';

describe('Crear Pagina', ()=>{
  let logInPage = new LoginPage();
  let pagesPage = new PagesPage();
  let labsPage = new LabsPage();
  
  beforeEach(() =>{
    //Given
    logInPage.doLogIn();
    labsPage.clearAdmin();
  })


  it('Escenario crear una pagina', () =>{
    //When
    pagesPage.createNewPage(false, "escenario crea pagina");
    //Then
    cy.url().then((url)=> pagesPage.validExistence(url,true));      
  });

});