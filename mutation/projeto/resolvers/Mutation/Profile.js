import { profiles } from '../../data/db';

const findProfileIndex = (filter) => {
  if (!filter) return -1;
  const { id } = filter;
  if (id) return profiles.findIndex((profile) => profile.id === id);
  return -1;
};

export default {
  newProfile: (_, { data }) => {
    profiles.push({ id: profiles.length + 1, name: data.name });
    return profiles[profiles.length - 1];
  },

  deleteProfile: (_, { filter }) => {
    const indexExists = findProfileIndex(filter);
    const [deletedProfile] = profiles.splice(indexExists, 1);
    return deletedProfile;
  },
};
