import createDataContext from "./createDataContext";

const ACTIONS = {
  ADD_CURRENT_LOCATION: "ADD_CURRENT_LOCATION",
  START_RECORDING: "START_RECORDING",
  STOP_RECORDING: "STOP_RECORDING"
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CURRENT_LOCATION: {
      return {
        ...state,
        currentLocation: action.payload
      };
    }
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => location =>
  dispatch({ type: ACTIONS.ADD_CURRENT_LOCATION, payload: location });

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { currentLocation: null, locations: [], recording: false }
);
