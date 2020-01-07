import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Tab1 from '../screens/board_tab1';
import Tab2 from '../screens/board_tab2';
import Tab3 from '../screens/board_tab3';
import Tab4 from '../screens/board_tab4';
import Tab5 from '../screens/board_tab5';
import PhotosTab1 from '../screens/photos_tab1';
import PhotosTab2 from '../screens/photos_tab2';
import PhotosTab3 from '../screens/photos_tab3';
import PhotosTab4 from '../screens/photos_tab4';
import PhotosTab5 from '../screens/photos_tab5';
import {topTabColor} from './css/navigator_css';
import {withBoardBtn} from '../components/with_board_btn';

// bottomTab의 board에 들어갈 topTab 생성
export const boardTopTabNavigator = createMaterialTopTabNavigator(
  {
    tab1: {
      screen: Tab1,
      navigationOptions: () => {
        return {
          title: 'new',
        };
      },
    },
    tab2: {
      screen: Tab2,
      navigationOptions: () => {
        return {
          title: 'near',
        };
      },
    },
    tab3: {
      screen: Tab3,
      navigationOptions: () => {
        return {
          title: '미정',
        };
      },
    },
    tab4: {
      screen: Tab4,
      navigationOptions: () => {
        return {
          title: '미정',
        };
      },
    },
    tab5: {
      screen: Tab5,
      navigationOptions: () => {
        return {
          title: '미정',
        };
      },
    },
  },
  {
    tabBarOptions: {
      // scrollEnabled: true,
      tabStyle: {},
      style: {
        backgroundColor: topTabColor,
      },
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);

// HOC안에 boardTopTabNavigator를 집어넣는다(custom navigator)
export const boardTopTabwithBoardBtn = withBoardBtn()(boardTopTabNavigator);

// bottomTab의 photos에 들어갈 topTab 생성
export const photosTopTabNavigator = createMaterialTopTabNavigator(
  {
    tab1: {
      screen: PhotosTab1,
      navigationOptions: () => {
        return {
          title: 'new',
        };
      },
    },
    tab2: {
      screen: PhotosTab2,
      navigationOptions: () => {
        return {
          title: 'near',
        };
      },
    },
    tab3: {
      screen: PhotosTab3,
      navigationOptions: () => {
        return {
          title: 'sexy',
        };
      },
    },
    tab4: {
      screen: PhotosTab4,
      navigationOptions: () => {
        return {
          title: 'top100',
        };
      },
    },
    tab5: {
      screen: PhotosTab5,
      navigationOptions: () => {
        return {
          title: 'hentai',
        };
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: topTabColor,
      },
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);
