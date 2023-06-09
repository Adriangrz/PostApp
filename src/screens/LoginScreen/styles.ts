import {StyleSheet} from 'react-native';

import {theme} from '../../providers/ThemeProvider/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: theme.spacings.md,
  },
  container: {
    flex: 1,
  },
  loginForm: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    alignSelf: 'stretch',
    color: theme.palette.red.main,
    textAlign: 'center',
  },
});
