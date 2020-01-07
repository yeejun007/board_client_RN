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
    justifyContent: 'center',
    height: '100%',
    width: '13%',
    paddingTop: 3,
  },
});
