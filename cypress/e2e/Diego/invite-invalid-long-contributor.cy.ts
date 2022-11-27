import { LoginPage } from '../../PageObject/login-page-d.js';
import { MemberPage } from '../../PageObject/members-page.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';
let config = require('../../../config.json');

describe('Scenario4',()=>{
    let strategy: IStrategy;
  
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Invite contributor with long invalid email', () => {
        let userText = config.logIn.userName;
        let passText = config.logIn.userPass;
        let loginPage = new LoginPage(userText, passText);
        loginPage.doLogIn();

        let membersPage = new MemberPage();
        let memberEmail = strategy.getLargeString();
        let memberRole = 'Contributor';
        membersPage.inviteNewMember(memberEmail, memberRole);

    });

});
