import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
# Novo tipo scalar
scalar Date
# Pontos de entrada da sua API
  type Query {
    hello: String
    currentTime: String
    date: Date
  }
`;

const resolvers = {
  Query: {
    hello: () => 'return string',
    currentTime: () => new Date().toLocaleTimeString(),
    date: () => new Date(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
