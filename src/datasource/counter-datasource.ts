import { MongoDataSource } from "apollo-datasource-mongodb";
import { CounterDoc, Counter } from "../models/counters";

class CounterDatasource extends MongoDataSource<CounterDoc> {
  constructor(Counter) {
    super(Counter);
  }
  // query
  async getCounters() {
    const resp = await (this.model as typeof Counter).find();
    return resp;
  }
  async getCounter(counterId: string) {
    const resp = await (this.model as typeof Counter).findOne({ id: counterId });
    return resp;
  }
  // mutation
}

export default CounterDatasource;
