import { DataPoolAprioriStrategy } from "./data-pool-apriori-strategy"
import { DataPoolOnlineStategy } from "./data-pool-online-strategy"
import { IStrategy } from "./i-strategy"
import { OnlineStrategy } from "./online-strategy"

export class StrategyFactory {
    static createObject(someProperty: string): IStrategy{
        if (someProperty === 'strategy1') {
            return new DataPoolAprioriStrategy()
        } else if (someProperty === 'strategy2') {
            return new DataPoolOnlineStategy()
        } else {
            return new OnlineStrategy()
        }
    }
}