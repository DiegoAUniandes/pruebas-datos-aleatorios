import { LabsPage } from '../PageObject/labs-page';
import { LoginPage } from '../PageObject/login-page';
import { PagesPage } from '../PageObject/pages-page.js';


describe('Borrar Pagina', async ()=>{
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();
    let labsPage = new LabsPage();

    beforeEach(() =>{
      //Given
      logInPage.doLogIn();
      labsPage.clearAdmin();  
      pagesPage.createNewPage(false, "escenario borra");
      cy.url().then((url)=> cy.wrap(url).as('pageUri'));
    })


    it('Escenario borrar una pagina', () =>{
      cy.get('@pageUri').then(async (pageUri)=>{ 
        
        pagesPage.validExistence(pageUri,true);
        //When
        cy.wait(2000);
        pagesPage.deletePage(pageUri);
        //Then
        cy.wait(2000);
        pagesPage.validExistence(pageUri,false);
      });
    });
  
  });