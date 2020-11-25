import { userData } from './users-data.js'
let users = userData;

const fetchAll = () => {
  return [...users];
}

export const checkPhoneIsExists = (phone) => {
  return users.find((user) => user.phone === phone) ? { data: true } : { data: false };
}

const fetchByPhone = (phone) => {
  return users.find((user) => user.phone === phone);
}
const fetchByPhoneAndPassword = (phone, password) => {
  return users.find((user) => user.phone === phone && user.password === password);
}

const register = (user) => {
  try {
    const existUser = fetchByPhone(user.phone);
    if (!existUser) {
      users.push(user);
      return { data: user };
    } else {
      throw new Error('This phone is already registered');
    }
  } catch (error) {
    throw error;
  }
}

const login = (phone, password) => {
  try {
    const existUser = fetchByPhoneAndPassword(phone, password);
    if (existUser) {
      return { data: existUser };
    } else {
      throw new Error('The username or password is incorrect!');
    }
  } catch (error) {
    throw error;
  }
}

const userService = {
  fetchAll,
  fetchByPhone,
  register,
  login
}

export default userService;