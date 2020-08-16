import { Resolvers } from "../generated/graphql";

export const authorResolver: Resolvers = {
  Query: {
    authors: (_, __, { dataSources }) =>
      dataSources.authorDataSource.getAuthors(),

    author: (_, { authorId }, { dataSources }) =>
      dataSources.authorDataSource.getAuthorById({ authorId }),
  },
  Author: {
    books: (root, _, { dataSources }) =>
      dataSources.bookDataSource.getBookByAuthor({ authorId: root.id }),
  },
  Mutation: {
    createAuthor: (_, { name }, { dataSources }) =>
      dataSources.authorDataSource.createAuthor({ name }),
  },
};
