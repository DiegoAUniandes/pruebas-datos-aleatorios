import { LoginPage } from '../../PageObject/login-page-d.js';
import { MemberPage } from '../../PageObject/members-page.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory.ts';
let config = require('../../../config.json');

describe('Scenario1',()=>{

    async function createStrategy() {
        const strategy = await StrategyFactory.getStrategy();
        return strategy;
    }

    let strategy = createStrategy();

    strategy.then((value) => {

        it ('Invite admin with invalid email', () => {
            let userText = config.logIn.userName;
            let passText = config.logIn.userPass;
            let loginPage = new LoginPage(userText, passText);
            loginPage.doLogIn();
            
            let membersPage = new MemberPage();
            let memberEmail = value.getShortString();
            let memberRole = 'Administrator';
            membersPage.inviteNewMember(memberEmail, memberRole);

        });
    });

});
