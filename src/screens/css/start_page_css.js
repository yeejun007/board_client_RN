import {StyleSheet} from 'react-native';

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
  emailInput: {borderColor: 'black', borderBottomWidth: 2, width: 200},
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  passwordInput: {borderColor: 'black', borderBottomWidth: 2, width: 200},
  loginBtn: {
    justifyContent: 'center',
  },
  signupBtn: {
    justifyContent: 'center',
  },
});
