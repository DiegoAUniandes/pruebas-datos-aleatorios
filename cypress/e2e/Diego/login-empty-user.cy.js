import { LoginPage } from '../../PageObject/login-page-d.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory.ts';

describe('Scenario8',()=>{

    async function createStrategy() {
        const strategy = await StrategyFactory.getStrategy();
        return strategy;
    }

    let strategy = createStrategy();

    strategy.then((value) => {
        it ('Login with empty user', () => {
            let userText = '';
            let passText = value.getShortString();
            let loginPage = new LoginPage(userText, passText);
            loginPage.doFailLogIn();
        });
    });

});
