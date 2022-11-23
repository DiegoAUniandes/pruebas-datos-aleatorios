import { LabsPage } from '../PageObject/labs-page.js';
import { LoginPage } from '../PageObject/login-page.js';
import { PostPage } from '../PageObject/post-page.js';

describe('Borrar Post', () => {
    let logInPage = new LoginPage();
    let postPage = new PostPage();
    let labsPage = new LabsPage();

    beforeEach(() =>{
        //Given
        logInPage.doLogIn();
        labsPage.clearAdmin();
        postPage.createNewPost(true, " escenario borra post publicado");
        cy.url().then((url)=> cy.wrap(url).as('postUri'));
        postPage.checkUserView();
    })

        
    it('Escenario para la eliminación de un post publicado', () => {
        cy.get('@postUri').then((postUri)=>{ 
            postPage.validExistence(postUri,true);
            //When
            cy.wait(2000);
            postPage.deletePost(postUri);
            //Then
            cy.wait(2000);
            postPage.validExistence(postUri,false);
        });
    });

});