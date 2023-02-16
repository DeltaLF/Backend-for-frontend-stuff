import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { mocks } from "./mocks/index.js";
import typeDefs from "./schema.js";
import resolvers from "./resolver.js";
import { Counter as CounterModel } from "./models/counters.js";
import CounterDatasource from "./datasource/counter-datasource.js";
import { v4 } from "uuid";
// connect mongodb

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("connected to mongodb");

  const server = new ApolloServer({
    typeDefs: typeDefs,
    // mocks: mocks,
    resolvers: resolvers,
    dataSources: () => {
      return {
        couterDatasource: new CounterDatasource(CounterModel),
      };
    },
  });

  server.listen({ port: 4001 }).then(() => {
    console.log("server is runinng on port 4001");
  });
})();
