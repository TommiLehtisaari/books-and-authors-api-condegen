import { ApolloServer } from "apollo-server";

import { dataSources, DataSources } from "./dataSources";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

export interface Context {
  dataSources: DataSources;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
