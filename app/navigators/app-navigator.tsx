import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventsScreen, EventScreen} from '_app/screens';
import {NavigatorParamList} from './types';

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="events">
      <Stack.Screen name="events" component={EventsScreen} />
      <Stack.Screen name="event" component={EventScreen} />
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
