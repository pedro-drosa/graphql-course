import { users } from '../../data/db';

export default {
  users: () => users,
  user: (_, { id }) => {
    const [filter] = users.filter((user) => user.id === id);
    return filter;
  },
};
