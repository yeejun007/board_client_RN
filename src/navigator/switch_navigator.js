import React from 'react';
import {Button} from 'native-base';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {drawerNavigator} from './drawer_navigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Signup from '../screens/sign_up';
import StartPage from '../screens/start_page';
import {styles} from './css/navigator_css';
import {headerColor} from './css/navigator_css';
import {arrowBackColor} from './css/navigator_css';

// 시작화면에서 분기되는 stack 처리
const startStack = createStackNavigator({
  startPage: {
    screen: StartPage,
    navigationOptions: () => {
      return {
        header: null,
      };
    },
  },
  signup: {
    screen: Signup,
    navigationOptions: ({navigation}) => {
      return {
        headerStyle: {
          backgroundColor: headerColor,
        },
        headerLeft: (
          <Button
            transparent
            style={styles.backBtn}
            onPress={() => {
              return navigation.goBack();
            }}>
            <Ionicons name="md-arrow-back" size={30} color={arrowBackColor} />
          </Button>
        ),
      };
    },
  },
});

// App의 시작화면 등록
const startSwitchNavigator = createSwitchNavigator({
  startStack: {screen: startStack},
  main: {screen: drawerNavigator},
});

export const Drawer = createAppContainer(startSwitchNavigator);
