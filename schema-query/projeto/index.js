import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
# Pontos de entrada da sua API
  type Query {
    hello: String
    currentTime: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'return string',
    currentTime: () => new Date().toLocaleTimeString(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
