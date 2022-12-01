import React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import {color} from 'styles/Theme';
import {Main} from 'pages/index';
import {mainIcon} from 'src/assets/index';
import tabBarOption from 'utils/tabBarOption';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  // PARAM icon 관련 설정

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{...tabBarOption}}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  tintColor: focused ? '#8291E6' : undefined,
                  resizeMode: 'contain',
                  height: 31,
                  width: 31,
                }}
                source={mainIcon.HOME}
              />
            ),
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
