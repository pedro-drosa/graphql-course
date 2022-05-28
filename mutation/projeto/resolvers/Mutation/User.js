import { nextId, users } from '../../data/db';

const findUserIndex = (filter) => {
  if (!filter) return -1;
  const { id, email } = filter;
  if (id) return users.findIndex((user) => user.id === id);
  if (email) return users.findIndex((user) => user.email === email);
  return -1;
};

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

  deleteUSer: (_, { filter }) => {
    const indexExists = findUserIndex(filter);
    if (indexExists < 0) return null;
    const [deletedUSer] = users.splice(indexExists, 1);
    return deletedUSer;
  },

  changeUser: (_, { filter, data }) => {
    const indexExists = findUserIndex(filter);
    if (indexExists < 0) return null;
    const updatedUser = {
      ...users[indexExists],
      ...data,
    };
    users.splice(indexExists, 1, updatedUser);
    return updatedUser;
  },
};
