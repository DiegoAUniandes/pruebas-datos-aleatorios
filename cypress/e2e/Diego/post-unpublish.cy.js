import { LabsPage } from '../PageObject/labs-page.js';
import { LoginPage } from '../PageObject/login-page.js';
import { PostPage } from '../PageObject/post-page.js';

describe('Unpublish Post', () => {
    let logInPage = new LoginPage();
    let postPage = new PostPage();
    let labsPage = new LabsPage();

    beforeEach(() =>{
        //Given
        logInPage.doLogIn();
        labsPage.clearAdmin();
        postPage.createNewPost(true, " escenario despublica post");
        cy.url().then((url)=> cy.wrap(url).as('postUri'));
        postPage.checkUserView();
        cy.wait(2000);
    })


    it('Unpublish post',()=>{
        cy.get('@postUri').then((postUri)=>{ 
            //When
            postPage.unpublishPost(postUri);
            //Then
            postPage.checkNotFound();
        });
    });

});