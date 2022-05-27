import { profiles } from '../data/db';

export default {
  salary: (obj) => obj.real_salary,
  profile: (obj) => {
    const [filter] = profiles.filter((profile) => profile.id === obj.profileId);
    return filter;
  },
};
