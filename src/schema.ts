import { gql } from "apollo-server";

const typeDefs = gql`
  "Schema definitions"
  type Query {
    "fields"
    counters: [Counter]!
    counter(id: ID!): Counter
  }

  type Counter {
    id: ID!
    count: Int!
    data: String
  }

  type Mutation {
    createCounter(data: String): CounterResponse!
    "default value: 1"
    increaseCounter(id: ID!, value: Int): CounterResponse!
    deleteCounter(id: ID!): CounterResponse!
  }

  type CounterResponse {
    code: Int!
    success: Boolean!
    message: String!
    counter: Counter
  }
`;

export default typeDefs;
