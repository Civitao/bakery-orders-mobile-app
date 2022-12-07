import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.MAIN_400,
    width: 70,
    height: 18,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  order: {
    fontSize: THEME.FONT_SIZE.SMALL,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT_WHITE,
    letterSpacing: -1,
    
  }
});