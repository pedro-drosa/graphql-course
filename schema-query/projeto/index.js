import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
# Pontos de entrada da sua API
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'return string',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
