import { LoginPage } from '../../PageObject/login-page-d.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory.ts';

describe('Scenario5',()=>{

    async function createStrategy() {
        const strategy = await StrategyFactory.createObject(3);
        return strategy;
    }

    let strategy = createStrategy();

    strategy.then((value) => {
        it ('Login with no password and long username', () => {
            let userText = value.longString;
            let passText = '';
            let loginPage = new LoginPage(userText, passText);
            loginPage.doFailLogIn();
        });
    });

});