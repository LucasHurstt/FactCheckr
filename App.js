import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/firebaseConfig';
import FactCheckerScreen from './src/screens/FactCheckerScreen';
import AccountScreen from './src/screens/AccountScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        const iconName = route.name === 'FactChecker' ? 'search' : 'person';
        return (
          <Icon
            name={focused ? iconName : `${iconName}-outline`}
            size={28}
            color={color}
          />
        );
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#bc2c2c',
      tabBarInactiveTintColor: '#888',
      tabBarStyle: {
        backgroundColor: '#2b2b2b',
        borderTopWidth: 0,
        height: 70,
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name="FactChecker" component={FactCheckerScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthChecked(true);
    });
    return unsubscribe;
  }, []);

  if (!isAuthChecked) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;