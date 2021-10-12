export const people = [
  {
    id: 0,
    name: 'kynel',
    age: 27,
    gender: 'male',
  },
  {
    id: 1,
    name: 'june',
    age: 27,
    gender: 'male',
  },
  {
    id: 2,
    name: 'link',
    age: 27,
    gender: 'male',
  },
  {
    id: 3,
    name: 'mario',
    age: 27,
    gender: 'male',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
