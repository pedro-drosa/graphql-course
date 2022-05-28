import { nextId, users } from '../data/db';

export default {
  newUser: (_, { data }) => {
    const existingEmail = users.some(((user) => user.email === data.email));
    if (existingEmail) throw new Error('Email already registered');
    const newUser = {
      id: nextId(),
      ...data,
      profileId: 1,
      status: 'ACTIVE',
    };
    users.push(newUser);
    return newUser;
  },

  deleteUSer: (_, { id }) => {
    const indexExists = users.findIndex((user) => user.id === id);
    if (indexExists < 0) return null;
    const [deletedUSer] = users.splice(indexExists, 1);
    return deletedUSer;
  },

  changeUser: (_, args) => {
    const indexExists = users.findIndex((user) => user.id === args.id);
    if (indexExists < 0) return null;
    const updatedUser = {
      ...users[indexExists],
      ...args,
    };
    users.splice(indexExists, 1, updatedUser);
    return updatedUser;
  },
};
