import mongoose from "mongoose";

// type without built-in id
interface CounterAttrs {
  id: string;
  count: number;
  data: string;
}

interface CounterModel extends mongoose.Model<CounterDoc> {
  build(attrs: CounterAttrs): CounterDoc;
}

// type with mongo ObjectId + CounterAttrs
interface CounterDoc extends mongoose.Document {
  id: string;
  count: number;
  data: string;
}

const counterSchema = new mongoose.Schema({
  id: { type: String, required: true },
  count: { type: Number, required: true },
  data: String,
});

const buildCounter = (attrs: CounterAttrs) => {
  return new Counter(attrs);
};

counterSchema.statics.build = buildCounter;

const Counter = mongoose.model<CounterDoc, CounterModel>("Counter", counterSchema);

export { Counter, CounterAttrs, CounterDoc };

// interface ICounter {
//   _id: ObjectId;
//   id: string;
//   count: number;
//   data: string;
// }

// const counterSchema = new Schema<ICounter>({
//   id: { type: String, required: true },
//   count: { type: Number, required: true },
//   data: String,
// });

// const Counter = model<ICounter>("Counter", counterSchema);

// export { ICounter, counterSchema, Counter };
