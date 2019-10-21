import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import { navigate } from "../navigator/navigationService";

const ACTIONS = {
  ADD_ERROR: "ADD_ERROR",
  ON_SIGNUP: "ON_SIGNUP",
  ON_SIGNIN: "ON_SIGNIN"
};

const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case ACTIONS.ON_SIGNUP:
      return { isSignedIn: true, errorMessage: "", token: action.payload };

    case ACTIONS.ON_SIGNIN:
      return {
        isSignedIn: true,
        errorMessage: "test signed in",
        token: action.payload
      };

    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  // make api request to signup with email and password
  // if success, modify state abd store token
  // if fails, send error message
  try {
    const res = await trackerAPI.post("/signup", { email, password });

    console.log("@signup", res.data);

    await AsyncStorage.setItem("token", res.data.token);
    dispatch({ type: ACTIONS.ON_SIGNUP, payload: res.data.token });

    // TODO: navigate to main flow
    navigate("TrackList");
  } catch (error) {
    dispatch({
      type: ACTIONS.ADD_ERROR,
      payload: `Something went wrong signing up : ${error}`
    });
  }
};

const signin = dispatch => {
  return async ({ email, password }) => {
    // make api request to signup with email and password
    // handle success, update state
    // handle error, show error message
    try {
      const res = await trackerAPI.post("/signin", { email, password });

      console.log("@signin", res.data);

      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: ACTIONS.ON_SIGNIN, payload: res.data.token });

      // TODO: navigate to main flow
      navigate("TrackList");
    } catch (error) {
      dispatch({
        type: ACTIONS.ADD_ERROR,
        payload: `Something went wrong signing in : ${error}`
      });
    }
  };
};

const signout = dispatch => {
  return () => {
    // do signout stuff
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false, token: null, errorMessage: "" }
);
