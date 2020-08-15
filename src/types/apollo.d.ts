// see issue: https://github.com/apollographql/apollo-server/issues/2617

import { DataSource } from "apollo-datasource";

declare module "apollo-datasource" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface DataSource<TContext = any> {
    context: TContext;
  }
}
