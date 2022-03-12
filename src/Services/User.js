import Parse from 'parse/dist/parse.min';

export const signUp = async (username, password) => {
  try {
    const createdUser = await Parse.User.signUp(username, password);
    console.log(`Success! user ${createdUser.getUsername()} was created`);
  } catch (e) {
    console.log(e);
  }
};

export const login = async (username, password) => {
  try {
    const user = await Parse.User.logIn(username, password);
    return user;
  } catch (e) {
    console.log(e);
    throw new Error('login hatası');
  }
};

export const fetchCurrentUser = () => {
  try {
    const user = Parse.User.current();
    return user;
  } catch (e) {
    console.log(e);
    throw new Error('fetch current user hatası');
  }
};
