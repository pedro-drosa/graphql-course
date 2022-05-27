import { users, profiles } from '../data/db';

export default {
  users: () => users,
  user: (_, { id }) => {
    const [filter] = users.filter((user) => user.id === id);
    return filter;
  },

  profiles: () => profiles,
  profile: (_, { id }) => {
    const [filter] = profiles.filter((profile) => profile.id === id);
    return filter;
  },
};
