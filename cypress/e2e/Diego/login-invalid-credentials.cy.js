import { LoginPage } from '../../PageObject/login-page-d.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory.ts';

describe('Scenario1',()=>{

    async function createStrategy() {
        const strategy = await StrategyFactory.createObject(3);
        return strategy;
    }

    let strategy = createStrategy();

    strategy.then((value) => {
        it ('Login with invalid credentials', () => {
            let userText = value.shortString;
            let passText = value.shortString;
            let loginPage = new LoginPage(userText, passText);
            loginPage.doFailLogIn();
        });
    });

});
