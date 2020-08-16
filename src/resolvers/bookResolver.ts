import { UserInputError } from "apollo-server";

import { Resolvers } from "../generated/graphql";

export const bookResolver: Resolvers = {
  Query: {
    books: (_, __, { dataSources }) => dataSources.bookDataSource.getBooks(),

    book: (_, { bookId }, { dataSources }) =>
      dataSources.bookDataSource.getBookById({ bookId }),
  },
  Mutation: {
    createBook: (_, { authorId, title }, { dataSources }) => {
      const author = dataSources.authorDataSource.getAuthorById({ authorId });

      if (!author) {
        throw new UserInputError("Book creation requires a valid authorId");
      }

      return dataSources.bookDataSource.createBook({ title, authorId });
    },
  },
  Book: {
    author: (root, _, { dataSources }) =>
      dataSources.authorDataSource.getAuthorById({ authorId: root.author }),
  },
};
