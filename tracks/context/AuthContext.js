import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import { navigate } from "../navigator/navigationService";

const ACTIONS = {
  ADD_ERROR: "ADD_ERROR",
  ON_SIGNUP: "ON_SIGNUP",
  ON_SIGNIN: "ON_SIGNIN",
  ON_SIGNOUT: "ON_SIGNOUT",
  CLEAR_ERROR_MESSAGES: "CLEAR_ERROR_MESSAGES"
};

const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case ACTIONS.ON_SIGNUP:
      return { isSignedIn: true, errorMessage: "", token: action.payload };

    case ACTIONS.CLEAR_ERROR_MESSAGES:
      return { ...state, errorMessage: "" };

    case ACTIONS.ON_SIGNIN:
      return {
        isSignedIn: true,
        errorMessage: "",
        token: action.payload
      };

    case ACTIONS.ON_SIGNOUT: {
      return { token: null, errorMessage: "" };
    }

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

const tokenSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: ACTIONS.ON_SIGNIN, payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: ACTIONS.ON_SIGNOUT });
  navigate("loginFlow");
};

const clearErrorMessages = dispatch => () =>
  dispatch({ type: ACTIONS.CLEAR_ERROR_MESSAGES });

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessages, tokenSignin },
  { isSignedIn: false, token: null, errorMessage: "" }
);
