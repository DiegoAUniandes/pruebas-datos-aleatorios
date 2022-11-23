import { DataPoolAprioriStrategy } from "./data-pool-apriori-strategy"
import { DataPoolOnlineStategy } from "./data-pool-online-strategy"
import { IStrategy } from "./i-strategy"
import { OnlineStrategy } from "./online-strategy"

export class StrategyFactory {
    static async createObject(someProperty: string): Promise<IStrategy>{
        if (someProperty === 'strategy1') {
            return new DataPoolAprioriStrategy()
        } else if (someProperty === 'strategy2') {
            let strategy = new DataPoolOnlineStategy()
            await strategy.loadData()
            return <IStrategy>strategy
        } else {
            return new OnlineStrategy()
        }
    }

    static async getStrategy() {
        return await this.createObject('strategy2');
    }
}