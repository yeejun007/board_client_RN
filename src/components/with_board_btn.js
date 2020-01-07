import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Platform, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// board_textInput를 불러올 버튼을 HOC로 안에 넣기위해 custom na vigator를 만든다
export const withBoardBtn = () => WrappedComponent =>
  class extends Component {
    // 새로운 컴포넌트를 네비게이터로 사용하므로 router 설정이 필수
    // 이전 navigator에서 이 navigator로 찾아들어갈때 필요함
    // 메인으로 사용되는 topTabNavigator의 router를 그대로 가져와서 동일하게 설정해준다
    static router = WrappedComponent.router;

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      console.log('with_board_btn 렌더링 -> ', WrappedComponent.router);
      // const {navigation} = this.props;

      return (
        // 연필버튼은 나중에 현재 OS의 화면크기를 가져올수 있는 모듈을 찾아보기.
        // 연필버튼인 fab의 위치가 디바이스 화면 크기에 상관없이 동일한 위치에 오도록 해야함
        <>
          <WrappedComponent {...this.props} />
          <TouchableOpacity
            style={styles.pencilIconContainer}
            onPress={() => {
              this.props.navigation.navigate('boardTextInput');
            }}>
            <SimpleLineIcons name="pencil" size={25} />
          </TouchableOpacity>
        </>
      );
    }
  };

const styles = StyleSheet.create({
  pencilIconContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    position: 'absolute',
    backgroundColor: '#DA6E17',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'purple',
    padding: 10,
    alignSelf: 'flex-end',
    right: 15,
    bottom: 30,
    // ...Platform.select({
    //   ios: {
    //     top: 650,
    //     left: 350,
    //   },
    //   android: {
    //     top: 540,
    //     left: 330,
    //   },
    // }),
  },
});
