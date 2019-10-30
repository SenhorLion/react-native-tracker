import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const getTracks = dispatch => () => {};
const createTrack = dispatch => (name, locations) => {
  // Save tracks to API
  console.log("@createTrack", { name }, locations.length);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { getTracks, createTrack },
  { name: "", tracks: [] }
);
