const resolvers = {
  Query: {
    counters: (parent, args, context, info) => {
      const { dataSources } = context;
      return dataSources.couterDatasource.getCounters();
    },
    counter: (_, { id }, { dataSources }) => {
      console.log(id);
      return dataSources.couterDatasource.getCounter(id);
    },
  },
};

export default resolvers;
