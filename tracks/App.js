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

import { Provider as AuthProvider } from "./context/AuthContext";
import { setNavigator } from "./navigator/navigationService";

const switchNavigator = createSwitchNavigator({
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
    <AuthProvider>
      <App ref={navigator => setNavigator(navigator)} />
    </AuthProvider>
  );
};
