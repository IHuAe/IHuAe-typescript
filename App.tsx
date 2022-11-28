import React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {color} from 'styles/Theme';

import {Main} from 'pages/index';
import {mainIcon} from 'src/assets/index';

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
  // const iconConfig = (icon) => ({ focused }) => (
  //   <Image
  //     style={{
  //       tintColor: focused ? color.main.main : null,
  //       resizeMode: 'contain',
  //       height: 31,
  //       width: 31,
  //     }}
  //     source={icon}
  //   />
  // )

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
