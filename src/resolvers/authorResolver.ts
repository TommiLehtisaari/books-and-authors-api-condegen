import { Resolvers } from "../generated/graphql";

export const authorResolver: Resolvers = {
  Query: {
    authors: (_, __, { dataSources }) =>
      dataSources.authorDataSource.getAuthors(),

    author: (_, { authorId }, { dataSources }) =>
      dataSources.authorDataSource.getAuthorById({ authorId }),
  },
};
