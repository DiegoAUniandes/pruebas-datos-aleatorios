import { LabsPage } from "../../PageObject/labs-page";
import { LoginPage } from "../../PageObject/login-page";
import { PagesPage } from "../../PageObject/pages-page";


describe('Borrar Pagina publicada',()=>{
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();
    let labsPage = new LabsPage();

    beforeEach(() =>{
      //Given
      pagesPage.resolveStrategy();
      logInPage.doLogIn();
      labsPage.clearAdmin();
    })

    it('Escenario borrar una pagina',() =>{
      pagesPage.createNewPage(true, "escenario borra publicada");
      cy.url().then((url)=> cy.wrap(url).as('pageUri'));
      cy.get('@pageUri').then((pageUri)=>{ 
        pagesPage.checkUserView();
        pagesPage.validExistence(pageUri,true);
        cy.wait(2000);
        //When
        pagesPage.deletePage(pageUri);
        cy.wait(2000);
        //Then
        pagesPage.validExistence(pageUri,false);
      });
    });
  
  });