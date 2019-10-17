import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Action functions: signup, signin, signout

const signup = dispatch => {
  return ({ email, password }) => {
    // do signup stuff
  };
};

const signin = dispatch => {
  return ({ email, password }) => {
    // do signin stuff
  };
};

const signout = dispatch => {
  return () => {
    // do signout stuff
  };
};
export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
