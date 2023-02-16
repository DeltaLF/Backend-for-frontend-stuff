import { ApolloServer } from "apollo-server";
import { mocks } from "./mocks/index.js";
import typeDefs from "./schema.js";

const server = new ApolloServer({
  typeDefs: typeDefs,
  mocks: mocks,
});

server.listen({ port: 4001 }).then(() => {
  console.log("server is runinng on port 4001");
});
