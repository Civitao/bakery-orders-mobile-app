import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  label: {

  },
  flavorName: {
    fontSize: THEME.FONT_SIZE.LARGE,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    letterSpacing: -0.1,
    color: 'black',
    paddingBottom: 6,
    paddingTop: 6,
  
  },
  dropdownTouchable:{
    width: 160,
  },

});