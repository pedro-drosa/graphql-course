import { profiles } from '../../data/db';

export default {
  profiles: () => profiles,
  profile: (_, { id }) => {
    const [filter] = profiles.filter((profile) => profile.id === id);
    return filter;
  },
};
