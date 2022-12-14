import LoginAdminPage from "../../PageObject/LoginAdminPage"
import PagePage from "../../PageObject/PagePage"
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath');

describe("Cypress Edit and publish two pages Test Suite", function () {
    let strategy: IStrategy;
    before(async () => {  
        strategy = await StrategyFactory.getStrategy();
      })

    it("Edit and publish a page with valid data", function () {

        //Given
        let namePage1 = "page"+strategy.getShortString();
        let namePage2 = "page1"+strategy.getShortString();
        let descriptionPage = "baseDescriptionPage1"+strategy.getShortString();
        let descriptionPage1 = "descriptionPage1"+strategy.getLargeString();
        let descriptionPage2 = "descriptionPage1"+strategy.getLargeString();

        //When
        const login = new LoginAdminPage();        
        login.login();
        
        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        cy.wait(1000);
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   
        cy.wait(1000);
        //Then
        page.navigatePage(namePage1.replace(" ","-"));
        cy.wait(2000);
        page.validateTitlePagePublished(namePage1);  
        cy.wait(2000);
        page2.navigatePage(namePage2.replace(" ","-"));
        page2.validateTitlePagePublished(namePage2);  
        cy.wait(2000);
    });

    it("Edit and publish a page with only numbers", function () {

        //Given
        let namePage1 = "page"+strategy.getShortString();
        let namePage2 = "page1"+strategy.getShortString();
        let descriptionPage = 3+strategy.getNumber();
        let descriptionPage1 = 4+strategy.getNumber();
        let descriptionPage2 = 5+strategy.getNumber();

        //When
        const login = new LoginAdminPage();        
        login.login();
        
        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        cy.wait(1000);
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   
        cy.wait(1000);
        //Then
        page.navigatePage(namePage1.replace(" ","-"));
        cy.wait(2000);
        page.validateTitlePagePublished(namePage1);  
        cy.wait(2000);
        page2.navigatePage(namePage2.replace(" ","-"));
        page2.validateTitlePagePublished(namePage2);  
        cy.wait(2000);
    });

    it("Edit and publish a page with naughty data", function () {

        //Given
        let namePage1 = "page"+strategy.getShortString();
        let namePage2 = "page1"+strategy.getShortString();
        let descriptionPage = strategy.getNaughtyString();;
        let descriptionPage1 = strategy.getNaughtyString()+"1";;
        let descriptionPage2 = strategy.getNaughtyString()+"2";;

        //When
        const login = new LoginAdminPage();        
        login.login();
        
        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        cy.wait(1000);
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   
        cy.wait(1000);
        //Then
        page.navigatePage(namePage1.replace(" ","-"));
        cy.wait(2000);
        page.validateTitlePagePublished(namePage1);  
        cy.wait(2000);
        page2.navigatePage(namePage2.replace(" ","-"));
        page2.validateTitlePagePublished(namePage2);  
        cy.wait(2000);
    });

    it("Edit and publish a page with long data", function () {

        //Given
        let namePage1 = "page"+strategy.getLargeString();
        let namePage2 = "page1"+strategy.getLargeString();
        let descriptionPage = "baseDescriptionPage1"+strategy.getLargeString();
        let descriptionPage1 = "descriptionPage1"+strategy.getLargeString();
        let descriptionPage2 = "descriptionPage1"+strategy.getLargeString();

        //When
        const login = new LoginAdminPage();        
        login.login();
        
        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        cy.wait(1000);
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   
        cy.wait(1000);
        //Then
        page.navigatePage(namePage1.replace(" ","-"));
        cy.wait(2000);
        page.validateTitlePagePublished(namePage1);  
        cy.wait(2000);
        page2.navigatePage(namePage2.replace(" ","-"));
        page2.validateTitlePagePublished(namePage2);  
        cy.wait(2000);
    });
});