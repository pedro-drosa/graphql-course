import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs: importSchema('./schemas/index.graphql'),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
