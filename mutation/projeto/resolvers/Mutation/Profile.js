import { profiles } from '../../data/db';

export default {
  newProfile: (_, { data }) => {
    profiles.push({ id: profiles.length + 1, name: data.name });
    return profiles[profiles.length - 1];
  },
};
