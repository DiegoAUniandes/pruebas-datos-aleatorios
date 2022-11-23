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
      postPage.createNewPost(false, "escenario borra post");
      cy.url().then((url)=> cy.wrap(url).as('postUri'));
  })

      
  it('Escenario para la eliminación de un post publicado', () => {
      cy.get('@postUri').then((postUri)=>{   
        postPage.validExistence(postUri,true);
        cy.wait(2000);
        //When
        postPage.deletePost(postUri);
        cy.wait(2000);
        //Then
        postPage.validExistence(postUri,false);
      });
  });

});