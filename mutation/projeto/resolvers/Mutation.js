import { nextId, users } from '../data/db';

export default {
  newUser: (obj, { name, email, age }) => {
    const newUser = {
      id: nextId(),
      name,
      email,
      age,
      profileId: 1,
      status: 'ACTIVE',
    };
    users.push(newUser);
    return newUser;
  },
};
