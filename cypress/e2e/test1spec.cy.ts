import {IStrategy} from '../support/strategy/i-strategy' 
import { StrategyFactory } from "../support/strategy/strategy-factory";
let strategy: IStrategy;
beforeEach(() => {  
  strategy = StrategyFactory.createObject('strategy1')
  cy.log('I run before every test in every spec file!!!!!!')
})

describe('empty spec', () => {
  it('passes', () => {     
    cy.visit('https://example.cypress.io')
    cy.visit(strategy.getEmail());
  })
})