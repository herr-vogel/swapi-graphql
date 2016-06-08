import express from 'express';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';
import Resolvers from './data/resolvers';
import DataLoader from 'dataloader';
import { loadById } from './data/functions'

const GRAPHQL_PORT = 8080;

const graphQLServer = express();

graphQLServer.use('/graphql', apolloServer(req => {

  function createLoaders() {
    return {
      query: new DataLoader(
        keys => Promise.all(keys.map(loadById))
      )
    }
  }

  const loaders = createLoaders();

  return {
    context: {loaders},
    graphiql: true,
    pretty: true,
    schema: Schema,
    resolvers: Resolvers,
  }
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
