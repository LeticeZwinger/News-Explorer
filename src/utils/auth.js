const fakeUsers = [
  {
    name: "Letice Zwinger",
    email: "letice@example.com",
    password: "asdfasdf",
    _id: "letice-user-id-123",
    token: "letice-fake-token-123",
  },
  {
    name: "some user",
    email: "someuser@example.com",
    password: "password123",
    _id: "some-user-id-123",
    token: "some-fake-token-123",
  },
];

const generateRandomId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    const user = fakeUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      resolve({
        token: user.token,
        user: {
          name: user.name,
          email: user.email,
          _id: user._id,
        },
      });
    } else {
      reject(new Error("Invalid email or password"));
    }
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    const user = fakeUsers.find((user) => user.token === token);
    if (user) {
      resolve({ user });
    } else {
      reject(new Error("Invalid token"));
    }
  });
};

export const register = (name, email, password) => {
  return new Promise((resolve, reject) => {
    const existingUser = fakeUsers.find((user) => user.email === email);

    if (existingUser) {
      reject(new Error("User with this email already exists"));
    } else {
      const newUser = {
        name,
        email,
        password,
        _id: generateRandomId(),
        token: `fake-token-${generateRandomId()}`,
      };

      fakeUsers.push(newUser);

      console.log("New User Registered:", newUser);

      resolve({
        token: newUser.token,
        user: {
          name: newUser.name,
          email: newUser.email,
          _id: newUser._id,
        },
      });
    }
  });
};
