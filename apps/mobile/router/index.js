import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Tasks, Notes, Profile } from '@packages/shared/screens';
import { useIsSignedIn, useIsSignedOut } from './AuthHooks';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'home',
  screenOptions: {
    headerShown: false,
  },
  groups: {
    unauthenticated: {
      if: useIsSignedOut,
      screens: {
        home: Login,
      },
    },
    authenticated: {
      if: useIsSignedIn,
      screens: {
        home: Tasks,
        notes: Notes,
        profile: Profile,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
