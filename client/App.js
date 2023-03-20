import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {ApplicationProvider, IconRegistry, Icon} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import React, {useState, useEffect} from 'react';

import AuthScreen from './components/auth';
import HomeScreen from './components/home';
import ProfileScreen from './components/profile';
import ShopScreen from './components/shop';
import {HomeIcon} from './utils/icons';

const Tab = createBottomTabNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <AuthScreen />
      </ApplicationProvider>
    );
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list' : 'ios-list-outline';
                }

                // You can return any component that you like here!
                return <Icon name={'home-outline'} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Shop"
              component={ShopScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{headerShown: false}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
