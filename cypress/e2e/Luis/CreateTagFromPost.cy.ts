import LoginPage from '../../PageObject/LoginPage'
import CreatePostPage from '../../PageObject/CreatePostPage'
import TagsPage from '../../PageObject/TagsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory";

describe('Create tag from post', () => {
  let strategy: IStrategy;

  // Given
  beforeEach(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Create post and tag', () => {
    LoginPage.login('da.ramirez55@uniandes.edu.co', 'Cg94F4J&$#i8qjX@a9iP')

    //When
    CreatePostPage.createPost(
        '¿Cómo ser el mejor Software Developer?',
        'Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.'
    )
    CreatePostPage.createTagFromPost('nuevo tag in post')

    //Then
    TagsPage.validateTag('nuevo tag in post')
  })

})
