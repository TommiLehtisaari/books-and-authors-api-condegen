import { Resolvers } from "../generated/graphql";

export const bookResolver: Resolvers = {
  Query: {
    books: (_, __, { dataSources }) => dataSources.bookDataSource.getBooks(),

    book: (_, { bookId }, { dataSources }) =>
      dataSources.bookDataSource.getBookById({ bookId }),
  },
};
