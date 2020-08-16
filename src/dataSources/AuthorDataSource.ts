import { DataSource } from "apollo-datasource";

import { Author } from "../generated/graphql";
import { AuthorModel } from "../models";

const authors = [
  {
    id: "E9E2326E-069A-4459-9787-894D76813106",
    name: "J.K. Rowling",
  },
  {
    id: "84F85031-07BA-4D88-950C-88D80D06C678",
    name: "Michael Crichton",
  },
  {
    id: "1B8B13F5-6EBD-4085-9261-3B2C668418B3",
    name: "J.R.R. Tolkien",
  },
];

export class AuthorDataSource extends DataSource {
  public getAuthors = (): AuthorModel[] | null => authors;

  public getAuthorById = (params: { authorId: string }): AuthorModel | null => {
    const author = authors.find(
      (author: Author) => author.id === params.authorId,
    );

    if (!author) {
      return null;
    }

    return author;
  };
}
