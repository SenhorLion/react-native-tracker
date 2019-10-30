import createDataContext from "./createDataContext";

const ACTIONS = {
  ADD_LOCATION: "ADD_LOCATION",
  ADD_CURRENT_LOCATION: "ADD_CURRENT_LOCATION",
  START_RECORDING: "START_RECORDING",
  STOP_RECORDING: "STOP_RECORDING",
  CHANGE_NAME: "CHANGE_NAME"
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CURRENT_LOCATION: {
      return {
        ...state,
        currentLocation: action.payload
      };
    }
    case ACTIONS.ADD_LOCATION: {
      return {
        ...state,
        locations: [...state.locations, action.payload]
      };
    }

    case ACTIONS.CHANGE_NAME: {
      return {
        ...state,
        name: action.payload
      };
    }

    case ACTIONS.START_RECORDING: {
      return {
        ...state,
        recording: true
      };
    }

    case ACTIONS.STOP_RECORDING: {
      return {
        ...state,
        recording: false
      };
    }

    default:
      return state;
  }
};

const changeName = dispatch => name => {
  dispatch({ type: ACTIONS.CHANGE_NAME, payload: name });
};
const startRecording = dispatch => () => {
  dispatch({ type: ACTIONS.START_RECORDING });
};
const stopRecording = dispatch => () => {
  dispatch({ type: ACTIONS.STOP_RECORDING });
};
const addLocation = dispatch => (location, recording) => {
  dispatch({ type: ACTIONS.ADD_CURRENT_LOCATION, payload: location });

  if (recording) {
    dispatch({ type: ACTIONS.ADD_LOCATION, payload: location });
  }
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  { name: "", currentLocation: null, locations: [], recording: false }
);
