import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./screens/AccountScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import TrackDetailScreen from "./screens/TrackDetailScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import TrackListScreen from "./screens/TrackListScreen";
import AuthScreen from "./screens/AuthScreen";

import { Provider as AuthProvider } from "./context/AuthContext";
import { Provider as LocationProvider } from "./context/LocationContext";
import { Provider as TrackProvider } from "./context/TrackContext";
import { setNavigator } from "./navigator/navigationService";

const switchNavigator = createSwitchNavigator({
  authScreen: AuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainAppFlow: createBottomTabNavigator({
    Tracks: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={navigator => setNavigator(navigator)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
