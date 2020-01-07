import React from 'react';
import {Button} from 'native-base';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {meterialBottomTabNavigator} from './bottom_tab_navigator';
import {myPageBottomTabNavigator} from './bottom_tab_navigator';
import {userPageBottomTabNavigator} from './bottom_tab_navigator';
// 맨 처음의 스크린에서 게시물을 클릭하면 나오는 postScreen
// import PostScreen from '../screens/post_screen';
// 내 프로필 들어가서 내가 작성한 게시물 클릭하면 나오는 postScreen
import MyPostScreen from '../screens/my_post_screen';
// 맨 처음의 board스크린에서 게시물의 user사진을 클릭하면 나오는 userPage에서
// 그 user가 작성한 게시물을 클릭했을때 나오는 postScreen
import UserPostScreen from '../screens/user_post_screen';
import MyFriends from '../screens/my_friends';
import BookMark from '../screens/bookmark';
import Settings from '../screens/settings';
import ItemShop from '../screens/item_shop';
import Notice from '../screens/notice';
import BoardTextInput from '../screens/board_textinput';
import ChattingScreen from '../screens/chatting_screen';
// import PhotoScreen from '../screens/photo_screen';
import {headerColor} from './css/navigator_css';
import {arrowBackColor} from './css/navigator_css';
import {headerTitleColor} from './css/navigator_css';
import {styles} from './css/navigator_css';

export const initialNavigator = createStackNavigator({
  main: {
    screen: meterialBottomTabNavigator,
  },
  myPage: {
    screen: myPageBottomTabNavigator,
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
  userPage: {
    screen: userPageBottomTabNavigator,
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
  myPostScreen: {
    screen: MyPostScreen,
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
  userPostScreen: {
    screen: UserPostScreen,
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
  myFriends: {
    screen: MyFriends,
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
  bookMark: {
    screen: BookMark,
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
  settings: {
    screen: Settings,
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
  itemShop: {
    screen: ItemShop,
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
  notice: {
    screen: Notice,
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
  // postScreen: {
  //   screen: PostScreen,
  //   navigationOptions: ({navigation}) => {
  //     // console.log(navigation);
  //     return {
  //       headerTitle: navigation.state.params.data.nickname,
  //       headerTitleStyle: {
  //         color: headerTitleColor,
  //       },
  //       headerStyle: {
  //         backgroundColor: headerColor,
  //       },
  //       headerLeft: (
  //         <Button
  //           transparent
  //           style={styles.backBtn}
  //           onPress={() => {
  //             return navigation.goBack();
  //           }}>
  //           <Ionicons name="md-arrow-back" size={30} color={arrowBackColor} />
  //         </Button>
  //       ),
  //     };
  //   },
  // },
  // board_textinput.js 위치함
  boardTextInput: {
    screen: BoardTextInput,
    navigationOptions: ({navigation}) => {
      // console.log(navigation);
      return {
        headerTitle: null,
        headerTitleStyle: {
          color: headerTitleColor,
        },
        headerStyle: {
          backgroundColor: headerColor,
        },
        headerLeft: (
          <Button
            transparent
            style={styles.xBtn}
            onPress={() => {
              return navigation.goBack();
            }}>
            <Feather name="x-circle" size={30} color={arrowBackColor} />
          </Button>
        ),
        headerRight: null,
      };
    },
  },
  chattingScreen: {
    screen: ChattingScreen,
    navigationOptions: ({navigation}) => {
      // console.log(navigation);
      return {
        headerTitle: navigation.state.params.data.nickname,
        headerTitleStyle: {
          color: headerTitleColor,
        },
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
  // photoScreen: {
  //   screen: PhotoScreen,
  //   navigationOptions: ({navigation}) => {
  //     // console.log(navigation);
  //     return {
  //       headerTitle: '',
  //       headerTitleStyle: {
  //         color: headerTitleColor,
  //       },
  //       headerStyle: {
  //         backgroundColor: headerColor,
  //       },
  //       headerLeft: (
  //         <Button
  //           transparent
  //           style={styles.backBtn}
  //           onPress={() => {
  //             return navigation.goBack();
  //           }}>
  //           <Feather name="x-circle" size={30} color={arrowBackColor} />
  //         </Button>
  //       ),
  //     };
  //   },
  // },
});
