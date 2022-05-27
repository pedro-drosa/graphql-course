import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';

const users = [
  {
    id: 1, name: 'Anakin Skywalker', email: 'anakin@skywalker.com', age: 26, profileId: 1,
  },
  {
    id: 2, name: 'Obi-Wan Kenobi', email: 'obi-Wan@Kenobi.com', age: 36, profileId: 2,
  },
  {
    id: 3, name: 'Luke Skywalker', email: 'luke@skywalker.com', age: 19, profileId: 1,
  },
  {
    id: 4, name: 'Han Solo', email: 'han@solo.com', age: 19, profileId: 2,
  },

];

const profiles = [
  { id: 1, name: 'common' },
  { id: 2, name: 'admiministrator' },
];

const resolvers = {
  User: {
    salary: (obj) => obj.real_salary,
    profile: (obj) => {
      const [filter] = profiles.filter((profile) => profile.id === obj.profileId);
      return filter;
    },
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
  typeDefs: importSchema('./schemas/index.graphql'),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
