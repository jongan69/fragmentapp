import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import EnterScreen from '../src/enterScreen/enterScreen';
import QuestionnaireChecklist from '../src/questionnaireChecklist/questionnaireChecklist';
import SignIn from '../src/signIn/signIn';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={EnterScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={QuestionnaireChecklist}
        options={{
          title: 'Questions',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-text" />,
        }}
      />
      <BottomTab.Screen
        name="Signin"
        component={SignIn}
        options={{
          title: 'SignIn',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-text" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Welcome';
    case 'Links':
      return 'Choose your casue of stress';
    case 'Signin':
      return 'Please Sign in';
  }
}
