import { v4 } from "uuid";
const COUNTERS = [
  { id: v4(), count: 5, data: "this is first counter" },
  { id: v4(), count: 5, data: "this is a counter" },
  { id: v4(), count: 0, data: "this is a counter" },
  { id: v4(), count: 1, data: "this is a counter" },
];

const mocks = {
  Query: () => ({
    counters: () => COUNTERS,
    counter: (id) => {
      for (const countObj of COUNTERS) {
        if (countObj.id === id) {
          return countObj;
        }
      }
    },
  }),
};

export { mocks };
