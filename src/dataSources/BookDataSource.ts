import { DataSource } from "apollo-datasource";

import { BookModel } from "../models";

const books = [
  {
    id: "36989EF7-1A82-493E-8542-A348F5E027FA",
    title: "Harry Potter and the Chamber of Secrets",
    author: "E9E2326E-069A-4459-9787-894D76813106",
  },
  {
    id: "4E2651A5-2B93-4CB6-849B-98E17A177E87",
    title: "Jurassic Park",
    author: "84F85031-07BA-4D88-950C-88D80D06C678",
  },
  {
    id: "8B7E84DF-1C6C-4C5A-B46C-8B88ACEBB53E",
    title: "The Hobbit",
    author: "1B8B13F5-6EBD-4085-9261-3B2C668418B3",
  },
  {
    id: "F45210B1-26C8-47FF-BF43-54175CA25BAA",
    title: "The Lord of The Rings",
    author: "1B8B13F5-6EBD-4085-9261-3B2C668418B3",
  },
  {
    id: "11504DAB-4EEC-4D89-937B-2AD4732C5615",
    title: "Silmarillion",
    author: "1B8B13F5-6EBD-4085-9261-3B2C668418B3",
  },
];

export class BookDataSource extends DataSource {
  public getBooks = (): BookModel[] | null => books;

  public getBookById = (params: { bookId: string }): BookModel | null => {
    const book = books.find((book) => book.id === params.bookId);

    if (!book) {
      return null;
    }

    return book;
  };

  public getBookByAuthor = (params: {
    authorId: string;
  }): BookModel[] | null => {
    const listOfBooks = books.filter((book) => book.author === params.authorId);

    if (!listOfBooks) {
      return null;
    }

    return listOfBooks;
  };
}
