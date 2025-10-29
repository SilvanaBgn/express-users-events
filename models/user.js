const usersDB = [];

const createUser = (userData) => {
  const newUser = { id: Math.random(), ...userData };
  usersDB.push(newUser);
  return newUser;
};

const findByEmail = (email) => {
  return usersDB.find((user) => user.email === email);
};

const getAllUsers = () => {
  return usersDB;
};

export default { createUser, findByEmail, getAllUsers };
