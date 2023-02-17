import { MongoDataSource } from "apollo-datasource-mongodb";
import { CounterDoc, Counter } from "../models/counters.js";
import { v4 } from "uuid";
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
  async createCounter(data: string | undefined) {
    const newCounter = Counter.build({ id: v4(), count: 0, data });
    await newCounter.save();
    return newCounter;
  }
  async increaseCounter(id: string, value: number | undefined) {
    const newCounter = await Counter.findOneAndUpdate(
      { id: id },
      { $inc: { count: value === undefined ? 1 : value } },
      { new: true },
    );
    return newCounter;
  }
  async deleteCounter(id: string) {
    const deletedCounter = await Counter.findOneAndDelete({ id: id });
    return deletedCounter;
  }
}

export default CounterDatasource;
