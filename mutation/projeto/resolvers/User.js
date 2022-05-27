import { profiles } from '../data/db';

export default {
  profile: (obj) => {
    const [filter] = profiles.filter((profile) => profile.id === obj.profileId);
    return filter;
  },
};
