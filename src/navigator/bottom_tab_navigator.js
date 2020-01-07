import React from 'react';
import {Keyboard} from 'react-native';
import {Button} from 'native-base';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyPage from '../screens/my_page';
// UserPage는 요청해서 받은 데이터가 나 자신이 작성한 데이터라면 내 페이지가 될 수도 있다
import UserPage from '../screens/user_page';
import MyAlbum from '../screens/my_album';
import UserAlbum from '../screens/user_album';
import Game from '../screens/game';
import AlertScreen from '../screens/alert_screen';
// import Trade from '../screens/trade';
import Chat from '../screens/chat';
// import {boardTopTabNavigator} from './top_tab_navigator';
// 아래 boardTopTabwithBoardBtn는 연필버튼을 HOC를 통해 안에 집어넣은것
import {boardTopTabwithBoardBtn} from './top_tab_navigator';
import {photosTopTabNavigator} from './top_tab_navigator';
import {styles} from './css/navigator_css';
import {headerColor} from './css/navigator_css';
import {bottomTabColor} from './css/navigator_css';
import WithBadge from '../components/with_badge';

const BadgedBellIcon = WithBadge(88)(Fontisto);
const BadgedChatIcon = WithBadge(120)(AntDesign);

// bottomTab에 들어갈 스크린을 stack으로 감싸기
const boardStack = createStackNavigator({
  board: {
    screen: boardTopTabwithBoardBtn,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: '',
        headerStyle: {
          backgroundColor: headerColor,
        },
        // headerLeft: (
        //   <Button Badge transparent style={styles.alertBtn} onPress={() => {}}>
        //     <Fontisto name="bell" size={23} color="white" />
        //   </Button>
        // ),
        headerRight: (
          <Button
            Badge
            transparent
            style={styles.profileBtn}
            onPress={() => {
              Keyboard.dismiss();
              navigation.toggleDrawer();
            }}>
            <FontAwesome name="user-circle" size={30} color="white" />
          </Button>
        ),
      };
    },
  },
});

const photosStack = createStackNavigator({
  photos: {
    screen: photosTopTabNavigator,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: '',
        headerStyle: {
          backgroundColor: headerColor,
        },
        // headerLeft: (
        //   <Button Badge transparent style={styles.alertBtn} onPress={() => {}}>
        //     <Fontisto name="bell" size={23} color="white" />
        //   </Button>
        // ),
        headerRight: (
          <Button
            Badge
            transparent
            style={styles.profileBtn}
            onPress={() => {
              Keyboard.dismiss();
              navigation.toggleDrawer();
            }}>
            <FontAwesome name="user-circle" size={30} color="white" />
          </Button>
        ),
      };
    },
  },
});

const gameStack = createStackNavigator({
  game: {
    screen: Game,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: '',
        headerStyle: {
          backgroundColor: headerColor,
        },
        // headerLeft: (
        //   <Button Badge transparent style={styles.alertBtn} onPress={() => {}}>
        //     <Fontisto name="bell" size={23} color="white" />
        //   </Button>
        // ),
        headerRight: (
          <Button
            Badge
            transparent
            style={styles.profileBtn}
            onPress={() => {
              return navigation.toggleDrawer();
            }}>
            <FontAwesome name="user-circle" size={30} color="white" />
          </Button>
        ),
      };
    },
  },
});

// const tradeStack = createStackNavigator({
//   trade: {
//     screen: Trade,
//     navigationOptions: ({navigation}) => {
//       return {
//         headerTitle: '',
//         headerStyle: {
//           backgroundColor: headerColor,
//         },
//         headerLeft: (
//           <Button Badge transparent style={styles.alertBtn} onPress={() => {}}>
//             <Fontisto name="bell" size={23} color="white" />
//           </Button>
//         ),
//         headerRight: (
//           <Button
//             Badge
//             transparent
//             style={styles.profileBtn}
//             onPress={() => {
//               return navigation.toggleDrawer();
//             }}>
//             <FontAwesome name="user-circle" size={30} color="white" />
//           </Button>
//         ),
//       };
//     },
//   },
// });

const alertScreenStack = createStackNavigator({
  alertScreen: {
    screen: AlertScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: '',
        headerStyle: {
          backgroundColor: headerColor,
        },
        // headerLeft: (
        //   <Button Badge transparent style={styles.alertBtn} onPress={() => {}}>
        //     <Fontisto name="bell" size={23} color="white" />
        //   </Button>
        // ),
        headerRight: (
          <Button
            Badge
            transparent
            style={styles.profileBtn}
            onPress={() => {
              return navigation.toggleDrawer();
            }}>
            <FontAwesome name="user-circle" size={30} color="white" />
          </Button>
        ),
      };
    },
  },
});

const chatStack = createStackNavigator({
  chat: {
    screen: Chat,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: '',
        headerStyle: {
          backgroundColor: headerColor,
        },
        // headerLeft: (
        //   <Button Badge transparent style={styles.alertBtn} onPress={() => {}}>
        //     <Fontisto name="bell" size={23} color="white" />
        //   </Button>
        // ),
        headerRight: (
          <Button
            Badge
            transparent
            style={styles.profileBtn}
            onPress={() => {
              return navigation.toggleDrawer();
            }}>
            <FontAwesome name="user-circle" size={30} color="white" />
          </Button>
        ),
      };
    },
  },
});

// bottomTabNavigator에 위에서 생성한 stack을 넣는다
export const meterialBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    board: {
      screen: boardStack,
      navigationOptions: ({navigation}) => {
        return {
          title: '게시판',
          tabBarIcon: ({tintColor, focused}) => {
            return <FontAwesome name="edit" size={22} color={tintColor} />;
          },
        };
      },
    },
    photos: {
      screen: photosStack,
      navigationOptions: ({navigation}) => {
        return {
          title: '포토존',
          tabBarIcon: ({tintColor, focused}) => {
            return <Fontisto name="photograph" size={22} color={tintColor} />;
          },
        };
      },
    },
    game: {
      screen: gameStack,
      navigationOptions: ({navigation}) => {
        return {
          title: '게임',
          tabBarIcon: ({tintColor, focused}) => {
            return <FontAwesome name="gamepad" size={22} color={tintColor} />;
          },
        };
      },
    },
    alertScreen: {
      screen: alertScreenStack,
      navigationOptions: ({navigation}) => {
        return {
          title: '알림',
          tabBarIcon: ({tintColor, focused}) => {
            return (
              <BadgedBellIcon
                name="bell"
                size={22}
                color={tintColor}
                focused={focused}
              />
              // <Fontisto name="bell" size={22} color={tintColor} />
            );
          },
        };
      },
    },
    chat: {
      screen: chatStack,
      navigationOptions: ({navigation}) => {
        return {
          title: '채팅',
          tabBarIcon: ({tintColor, focused}) => {
            return (
              <BadgedChatIcon name="message1" size={22} color={tintColor} />
              // <AntDesign name="message1" size={22} color={tintColor} />
            );
          },
        };
      },
    },
  },
  {
    barStyle: {
      backgroundColor: bottomTabColor,
      borderTopWidth: 1,
      borderColor: 'gray',
    },
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
      };
    },
  },
);

// 처음 나올 스크린인 bottomTabNavigator를 메인화면으로 하는 stack으로 설정
// 계층상 drawer 내부에 속해있는 스크린은 여기에 등록해야한다
//    -> bottomTabNavigator와 같은 stack으로 묶어줘야 navigate로 이동 가능
export const myPageBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    mainProfile: {
      screen: MyPage,
      navigationOptions: ({navigation}) => {
        return {
          title: '프로필',
          tabBarIcon: ({tintColor, focused}) => {
            return <AntDesign name="idcard" size={22} color={tintColor} />;
          },
        };
      },
    },
    myAlbum: {
      screen: MyAlbum,
      navigationOptions: ({navigation}) => {
        return {
          title: '앨범',
          tabBarIcon: ({tintColor, focused}) => {
            return <AntDesign name="picture" size={22} color={tintColor} />;
          },
        };
      },
    },
  },
  {
    barStyle: {
      backgroundColor: bottomTabColor,
      borderTopWidth: 1,
      borderColor: 'gray',
    },
    navigationOptions: () => {
      return {
        headerTitle: '',
        backgroundColor: bottomTabColor,
      };
    },
  },
);

export const userPageBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    userProfile: {
      screen: UserPage,
      navigationOptions: ({navigation}) => {
        return {
          title: '프로필',
          tabBarIcon: ({tintColor, focused}) => {
            return <AntDesign name="idcard" size={22} color={tintColor} />;
          },
        };
      },
    },
    userAlbum: {
      screen: UserAlbum,
      navigationOptions: ({navigation}) => {
        return {
          title: '앨범',
          tabBarIcon: ({tintColor, focused}) => {
            return <AntDesign name="picture" size={22} color={tintColor} />;
          },
        };
      },
    },
  },
  {
    barStyle: {
      backgroundColor: bottomTabColor,
      borderTopWidth: 1,
      borderColor: 'gray',
    },
    navigationOptions: () => {
      return {
        headerTitle: '',
        backgroundColor: bottomTabColor,
      };
    },
  },
);
