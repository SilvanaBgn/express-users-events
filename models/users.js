const usersDB = [];

const createUser = (userData) => {
  const newUser = { id: usersDB.length + 1, ...userData };
  usersDB.push(newUser);
  return newUser;
};

const findByEmail = (email) => {
  return usersDB.find((user) => user.email === email);
};

export { createUser, findByEmail };
