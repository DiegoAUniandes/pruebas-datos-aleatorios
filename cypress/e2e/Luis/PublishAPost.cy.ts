import LoginPage from '../../PageObject/LoginPage'
import CreatePostPage from '../../PageObject/CreatePostPage'
import LandingPage from '../../PageObject/LandingPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory"
require('@cypress/xpath')


describe('Publish a post', () => {
  let strategy: IStrategy;

  // Given
  before(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Publish a post', () => {
    let title = strategy.getShortString()
    let body = strategy.getLargeString()
    LoginPage.login('da.ramirez55@uniandes.edu.co', 'Cg94F4J&$#i8qjX@a9iP')

    // When
    CreatePostPage.createPost(title, body)
    CreatePostPage.publishPost()

    // Then
    LandingPage.ValidatePost(title, body)
  })
})
