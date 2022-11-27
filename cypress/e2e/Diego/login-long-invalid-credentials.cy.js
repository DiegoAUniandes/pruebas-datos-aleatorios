import { LoginPage } from '../../PageObject/login-page-d.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory.ts';

describe('Scenario10',()=>{

    async function createStrategy() {
        const strategy = await StrategyFactory.getStrategy();
        return strategy;
    }

    let strategy = createStrategy();

    strategy.then((value) => {
        it ('Login with long invalid credentials', () => {
            let userText = value.getLargeString();
            let passText = value.getLargeString();
            let loginPage = new LoginPage(userText, passText);
            loginPage.doFailLogIn();
        });
    });

});
