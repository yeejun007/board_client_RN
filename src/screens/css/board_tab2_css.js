import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#021b02',
    // flex: 1,
  },
  searchIcon: {
    ...Platform.select({
      android: {
        paddingTop: 2,
      },
    }),
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingTop: 5,
    paddingBottom: 3,
    borderWidth: 5,
    borderColor: '#022C17',
  },
  searchTextInput: {
    ...Platform.select({
      android: {
        paddingTop: -10,
        paddingBottom: -10,
      },
      ios: {},
    }),
    width: '80%',
    paddingLeft: 10,
    borderWidth: 0,
    fontSize: 16,
  },
  searchBtn: {
    ...Platform.select({
      android: {},
      ios: {},
    }),
    justifyContent: 'center',
    height: '100%',
    width: '13%',
    paddingTop: 3,
  },
  // pencilIconContainer: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 10,
  //   },
  //   shadowOpacity: 0.51,
  //   shadowRadius: 13.16,
  //   elevation: 20,
  //   position: 'absolute',
  //   backgroundColor: '#DA6E17',
  //   borderWidth: 2,
  //   borderRadius: 30,
  //   borderColor: 'purple',
  //   padding: 10,
  //   ...Platform.select({
  //     ios: {
  //       top: 600,
  //       left: 350,
  //     },
  //     android: {
  //       top: 490,
  //       left: 330,
  //     },
  //   }),
  // },
});
