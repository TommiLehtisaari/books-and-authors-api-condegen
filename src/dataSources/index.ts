import { DataSource } from "apollo-datasource";

import { AuthorDataSource } from "./AuthorDataSource";
import { BookDataSource } from "./BookDataSource";

export interface DataSources {
  authorDataSource: AuthorDataSource;
  bookDataSource: BookDataSource;

  // to make apollo-server happy.
  [s: string]: DataSource;
}

export const dataSources = (): DataSources => ({
  authorDataSource: new AuthorDataSource(),
  bookDataSource: new BookDataSource(),
});
