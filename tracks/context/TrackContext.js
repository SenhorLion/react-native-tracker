import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";

const GET_TRACKS = "GET_TRACKS";

const trackReducer = (state, action) => {
  switch (action.type) {
    case GET_TRACKS: {
      return {
        tracks: [...action.payload]
      };
    }
    default:
      return state;
  }
};

const getTracks = dispatch => async () => {
  const tracks = await trackerAPI.get("/tracks");
  dispatch({ type: GET_TRACKS, payload: tracks.data });
};

const createTrack = dispatch => async (name, locations) => {
  await trackerAPI.post("/tracks", {
    name,
    locations
  });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { getTracks, createTrack },
  { tracks: [] }
);
