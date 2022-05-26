import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
# Novo tipo scalar
scalar Date
# Pontos de entrada da sua API
  type Product {
    name: String!
    price: Float!
    percentageDiscount: Float 
    discountPrice: Float
  }
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
    featuredProduct: Product
    randomNumbers: [Int!]!
  }
`;

const resolvers = {
  User: {
    salary: (obj) => obj.real_salary,
  },

  Product: {
    discountPrice: (obj) => {
      if (obj.percentageDiscount) {
        return obj.price - (obj.price * obj.percentageDiscount);
      }
      return obj.price;
    },

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

    featuredProduct: () => ({
      name: 'PC Gamer',
      price: 4890.89,
      percentageDiscount: 0.5,
    }),

    randomNumbers: () => new Array(6)
      .fill()
      .map(() => Math.floor(Math.random() * 61))
      .sort((a, b) => a - b),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
