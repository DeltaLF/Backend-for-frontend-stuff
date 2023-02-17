const resolvers = {
  Query: {
    counters: (parent, args, context, info) => {
      const { dataSources } = context;
      return dataSources.couterDatasource.getCounters();
    },
    counter: (_, { id }, { dataSources }) => {
      return dataSources.couterDatasource.getCounter(id);
    },
  },
  Mutation: {
    createCounter: async (_, { data }, { dataSources }) => {
      try {
        const res = await dataSources.couterDatasource.createCounter(data);
        return {
          code: 201,
          success: false,
          message: "Counter created successfully!",
          counter: res,
        };
      } catch (error) {
        const { response } = error.extensions;
        return {
          code: response.status,
          success: false,
          message: response.body,
          counter: null,
        };
      }
    },
  },
};

export default resolvers;
