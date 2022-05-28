import { profiles } from '../../data/db';

const findProfileIndex = (filter) => {
  if (!filter) return -1;
  const { id } = filter;
  if (id) return profiles.findIndex((profile) => profile.id === id);
  return -1;
};

export default {
  newProfile: (_, { data }) => {
    const existingProfile = profiles.some((some) => some.name === data.name);
    if (existingProfile) throw new Error('Profile already registered');
    profiles.push({ id: profiles.length + 1, name: data.name });
    return profiles[profiles.length - 1];
  },

  deleteProfile: (_, { filter }) => {
    const indexExists = findProfileIndex(filter);
    const [deletedProfile] = profiles.splice(indexExists, 1);
    return deletedProfile;
  },

  changeProfile: (_, { filter, data }) => {
    const indexExists = findProfileIndex(filter);
    if (indexExists < 0) return null;
    const updatedProfile = {
      ...profiles[indexExists],
      ...data,
    };
    profiles.splice(indexExists, 1, updatedProfile);
    return updatedProfile;
  },
};
