import {IStrategy} from '../support/strategy/i-strategy' 
import { StrategyFactory } from "../support/strategy/strategy-factory";



describe('empty spec', () => {

  let strategy: IStrategy;
  beforeEach(async () => {  
    strategy = await StrategyFactory.getStrategy();
  })

  it('passes', () => {     
    console.log(strategy.getShortString());
    cy.visit('https://example.cypress.io')
    
  })
})