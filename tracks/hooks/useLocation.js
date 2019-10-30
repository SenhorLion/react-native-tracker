import { useState, useEffect } from "react";
import { watchPositionAsync, Accuracy } from "expo-location";
import * as Permissions from "expo-permissions";

export default (shouldTrack, callback) => {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let subscriber = null;
    const startTracking = async () => {
      try {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        // status: granted | denied
        if (status !== "granted") {
          setErrorMessage("Permission to access location was denied");
        }

        // otherwise, all rosy, permissions granted so start tracking...
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        );
      } catch (err) {
        setErrorMessage(err);
      }
    };

    if (shouldTrack) {
      startTracking();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [errorMessage];
};
