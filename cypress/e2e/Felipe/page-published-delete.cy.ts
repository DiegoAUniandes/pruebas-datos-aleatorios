import { LabsPage } from "../../PageObject/labs-page";
import { LoginPage } from "../../PageObject/login-page";
import { PagesPage } from "../../PageObject/pages-page";
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";


describe('Borrar Pagina publicada', function () {
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();
    let labsPage = new LabsPage();

    let strategy: IStrategy;

    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it('Escenario borrar una pagina', () =>{
      logInPage.doLogIn();
      labsPage.clearAdmin();
      console.log("care c")
      console.log(strategy.getShortString());
      pagesPage.resolveStrategy(strategy);
      pagesPage.createNewPage(true);
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