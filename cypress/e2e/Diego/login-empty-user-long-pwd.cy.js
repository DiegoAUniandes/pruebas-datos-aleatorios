import { LoginPage } from '../../PageObject/login-page-d.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory.ts';

describe('Scenario1',()=>{

    async function createStrategy() {
        const strategy = await StrategyFactory.createObject(3);
        return strategy;
    }

    let strategy = createStrategy();

    strategy.then((value) => {
        it ('Login with no user and long password', () => {
            let userText = '';
            let passText = value.longString;
            let loginPage = new LoginPage(userText, passText);
            loginPage.doFailLogIn();
        });
    });

});
