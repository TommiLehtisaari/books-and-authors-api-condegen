import { mergeResolvers } from "@graphql-tools/merge";

import { authorResolver } from "./authorResolver";
import { bookResolver } from "./bookResolver";

export const resolvers = mergeResolvers([bookResolver, authorResolver]);
