let initialId = 1;

export const nextId = () => initialId++;

export const users = [
  {
    id: nextId(), name: 'Anakin Skywalker', email: 'anakin@skywalker.com', age: 26, profileId: 1, status: 'ACTIVE',
  },
  {
    id: nextId(), name: 'Obi-Wan Kenobi', email: 'obi-Wan@Kenobi.com', age: 36, profileId: 2, status: 'INACTIVE',
  },
  {
    id: nextId(), name: 'Luke Skywalker', email: 'luke@skywalker.com', age: 19, profileId: 1, status: 'BLOCKED',
  },
  {
    id: nextId(), name: 'Han Solo', email: 'han@solo.com', age: 19, profileId: 2, status: 'ACTIVE',
  },
];

export const profiles = [
  { id: 1, name: 'common' },
  { id: 2, name: 'administrator' },
];
