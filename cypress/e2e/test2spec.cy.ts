import LoginAdminPage from "../PageObject/LoginAdminPage"
import PagePage from "../PageObject/PagePage"
import {Utility} from "../PageObject/Utility"
import {IStrategy} from '../support/strategy/i-strategy' 
import { StrategyFactory } from "../support/strategy/strategy-factory";
let strategy: IStrategy;
require('@cypress/xpath');

describe("Cypress POM Test Suite", function () {

    beforeEach(() => {  
        strategy = StrategyFactory.createObject('strategy1')
        cy.log('I run before every test in every spec file!!!!!!')
      })

    it("Edit and publish a page", function () {

        //Given
        const utility = new Utility();
        let namePage1 = "page"+utility.uuidv4();
        let descriptionPage1 = utility.uuidv4();

        //When
        const login = new LoginAdminPage();        
        login.login();
        
        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(strategy.getShortString());
        page.enterDescriptionPage("hid");
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
        
    });
});