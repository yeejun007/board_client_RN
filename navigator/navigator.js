import React from 'react';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Button, Badge, Text, Icon} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Content from '../screens/content';
import ChannelOne from '../screens/channelOne';
import ChannelTwo from '../screens/channelTwo';
import Settings from '../screens/settings';

const stackNavigator = createStackNavigator({
  Content: {
    screen: Content,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: '만드는중',
        headerLeft: (
          <Button Badge transparent style={styles.alertBtn} onPress={() => {}}>
            <AntDesign name="bells" size={25} />
          </Button>
        ),
        headerRight: (
          <Button
            Badge
            transparent
            style={styles.menuBtn}
            onPress={() => {
              return navigation.toggleDrawer();
            }}>
            <Feather name="menu" size={30} />
          </Button>
        ),
      };
    },
  },
  ChannelOne: {
    screen: ChannelOne,
  },
  ChannelTwo: {
    screen: ChannelTwo,
  },
  Settings: {
    screen: Settings,
  },
});

const drawerNavigator = createDrawerNavigator(
  {
    ChannelOne: {
      screen: ChannelOne,
    },
    ChannelTwo: {
      screen: ChannelTwo,
    },
    Settings: {
      screen: Settings,
    },
    Cancel: {
      screen: stackNavigator,
    },
  },
  {
    initialRouteName: 'Cancel',
  },
);

const styles = StyleSheet.create({
  alertBtn: {marginLeft: 15},
  menuBtn: {marginRight: 15},
});

export const Drawer = createAppContainer(drawerNavigator);
