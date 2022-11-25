import LoginPage from '../../PageObject/LoginPage'
import CreatePostPage from '../../PageObject/CreatePostPage'
import PostsPage from '../../PageObject/PostsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory";

describe('Schedule post publication', () => {
  let strategy: IStrategy;

  // Given
  beforeEach(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  // Given
  it('Login', () => {
    LoginPage.login('da.ramirez55@uniandes.edu.co', 'Cg94F4J&$#i8qjX@a9iP')
  })

  // When
  it('Create and schedule post publication', () => {
    CreatePostPage.createPost(
        '¿Cómo ser el mejor Tech Lead?',
        'Es bastante probable que con frecuencia encuentres contenido hablando maravillas de un lenguaje en específico.'
    )
    CreatePostPage.schedulePostPublication()

  // Then
    PostsPage.validateSchedulePost('¿Cómo ser el mejor Tech Lead?')
  })
})
