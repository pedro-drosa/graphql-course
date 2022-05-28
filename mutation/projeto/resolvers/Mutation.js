import { nextId, users } from '../data/db';

export default {
  newUser: (_, args) => {
    const existingEmail = users.some(((user) => user.email === args.email));
    if (existingEmail) throw new Error('Email already registered');

    const newUser = {
      id: nextId(),
      ...args,
      profileId: 1,
      status: 'ACTIVE',
    };
    users.push(newUser);
    return newUser;
  },
};
