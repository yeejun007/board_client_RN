import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {width: '100%'},
  typingContainer: {alignItems: 'center'},
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  emailInput: {
    ...Platform.select({
      android: {
        paddingBottom: 3,
        marginTop: -15,
      },
      ios: {
        paddingBottom: 5,
      },
    }),
    borderColor: 'black',
    borderBottomWidth: 2,
    marginLeft: 5,
    width: 200,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  passwordInput: {
    ...Platform.select({
      android: {
        paddingBottom: 3,
        marginTop: -15,
      },
      ios: {
        paddingBottom: 5,
      },
    }),
    borderColor: 'black',
    borderBottomWidth: 2,
    marginLeft: 5,
    width: 200,
  },
  loginBtn: {
    justifyContent: 'center',
  },
  signupBtn: {
    justifyContent: 'center',
  },
});
