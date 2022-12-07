import { THEME } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerShadow: {
    width: 120,
    height: 62,
    borderRadius: 32,
    backgroundColor: '#rgba(199, 199, 199, 0.31)'
  },
  container: {
    marginLeft: 2,
    flexDirection: 'row',
    width: 120,
    height: 58,
    backgroundColor: THEME.COLORS.MAIN_300,
    color: '#FFFFFF',
    borderRadius: 30,
    alignItems: 'center',
  },
  menuName: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MEDIUM,
    color: '#FFFFFF',
    marginRight: 4,

  },
  iconContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 46,
    height: 46,
    marginLeft: 6,
    borderRadius: 30,
    backgroundColor: '#FFFFFF'
  },
});