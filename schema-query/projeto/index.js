import { ApolloServer, gql } from 'apollo-server';

const users = [
  {
    id: 1, name: 'Anakin Skywalker', email: 'anakin@skywalker.com', age: 26,
  },
  {
    id: 2, name: 'Obi-Wan Kenobi', email: 'obi-Wan@Kenobi.com', age: 36,
  },
  {
    id: 3, name: 'Luke Skywalker', email: 'luke@skywalker.com', age: 19,
  },
  {
    id: 4, name: 'Han Solo', email: 'han@solo.com', age: 19,
  },

];

const profiles = [
  { id: 1, name: 'common' },
  { id: 2, name: 'admiministrator' },
];

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
  
  type Profile {
    id: Int
    name: String
  }

  type User {
    id: Int
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
    users: [User]
    user(id: Int): User
    profiles: [Profile]
    profile(id: Int): Profile
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
      id: 1,
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

    randomNumbers: () => new Array(6).fill()
      .map(() => Math
        .floor(Math.random() * 61))
      .sort((a, b) => a - b),

    users: () => users,
    user: (obj, args) => {
      const [filter] = users.filter((user) => user.id === args.id);
      return filter;
    },

    profiles: () => profiles,
    profile: (_, { id }) => {
      const [filter] = profiles.filter((profile) => profile.id === id);
      return filter;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
