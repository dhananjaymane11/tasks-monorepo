import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Profile } from '@packages/shared/screens';
import { useIsSignedIn, useIsSignedOut } from './AuthHooks';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
  },
  groups: {
    unauthenticated: {
      if: useIsSignedIn,
      screens: {
        Home: Login,
      },
    },
    authenticated: {
      if: useIsSignedOut,
      screens: {
        Profile: Profile,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
