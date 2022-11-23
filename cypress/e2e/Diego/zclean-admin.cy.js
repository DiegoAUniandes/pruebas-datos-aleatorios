import { LabsPage } from '../PageObject/labs-page.js';
import { LoginPage } from '../PageObject/login-page.js';

describe('Escenario borrar info total', async ()=>{
    let logInPage = new LoginPage();
    let labPage = new LabsPage();    
    beforeEach(() =>{
      logInPage.doLogIn();
    })


    it('clean data ', () =>{
        labPage.clearAdmin();
    });
  
  });