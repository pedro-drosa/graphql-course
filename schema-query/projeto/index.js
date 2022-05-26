import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
# Novo tipo scalar
scalar Date
# Pontos de entrada da sua API
  type User {
    id: ID
    name: String
    email: String
    age: Int
    salary: Float
    vip: Boolean  
  }

  type Query {
    hello: String!
    currentTime: String!
    date: Date!
    loggedInUser: User
  }
`;

const resolvers = {
  User: {
    salary: (obj) => obj.real_salary,
  },

  Query: {
    hello: () => 'return string',
    currentTime: () => new Date().toLocaleTimeString(),
    date: () => new Date(),
    loggedInUser: () => ({
      id: '001',
      name: 'Pedro Mascarenhas',
      email: 'pedro@mascarenhas.com',
      age: 26,
      real_salary: 1234.30,
      vip: true,
    }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
