import { LoginPage } from '../../PageObject/login-page-d.js';
import { MemberPage } from '../../PageObject/members-page.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory.ts';
let config = require('../../../config.json');

describe('Scenario1',()=>{

    async function createStrategy() {
        const strategy = await StrategyFactory.createObject(3);
        return strategy;
    }

    let strategy = createStrategy();

    strategy.then((value) => {

        beforeEach(() =>{
            let userText = config.logIn.userName;
            let passText = config.logIn.userPass;
            let loginPage = new LoginPage(userText, passText);
            loginPage.doLogIn();
          })

        it ('Invite admin with invalid email', () => {
            let membersPage = new MemberPage();
            let memberEmail = value.shortString;
            let memberRole = 'Administrator';
            membersPage.inviteNewMember(memberEmail, memberRole);

        });
    });

});
