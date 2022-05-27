import { users, profiles } from '../data/db';

export default {
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
};
