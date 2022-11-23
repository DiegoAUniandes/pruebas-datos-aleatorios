import { LabsPage } from '../PageObject/labs-page.js';
import { LoginPage } from '../PageObject/login-page.js';
import { PostPage } from '../PageObject/post-page.js';

describe('Crear Post', () => {

  let logInPage = new LoginPage();
  let postPage = new PostPage();
  let labsPage = new LabsPage();

  beforeEach(() =>{
      //Given
      logInPage.doLogIn();
      labsPage.clearAdmin();  
  })

  
  it('Escenario para la creación de un post que no se ha publicado',() => {
    //When
    postPage.createNewPost(false, "escenario crea post");
    //Then
    cy.url().then((url)=> postPage.validExistence(url,true));
  });
});