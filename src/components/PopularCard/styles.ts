import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  containerShadow:{
    width: 314,
    height: 120,
    borderRadius: 25,
    marginRight: 32,
    backgroundColor: '#rgba(199, 199, 199, 0.31)'
  },
  container: {
    width: 300,
    height: 110,
    flexDirection: 'row',
    marginLeft: 10,
        
  },
  picture: {
    width: 110,
    height: 110,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25
  },

  itemName: {
    fontSize: THEME.FONT_SIZE.LARGE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT_BLACK,
    lineHeight: 15
  },
  about: {
    fontSize: THEME.FONT_SIZE.SMALL,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT_GRAY,
    width: 120,
    height: 28,
 
  },
  iprice: {
    fontSize: THEME.FONT_SIZE.MEDIUM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.MAIN_400,
    marginTop: 28
     
  },
  footer: {
    backgroundColor: '#FFFFFF',
    width: 200,
    height: 110,
    paddingTop: 48,
    paddingLeft: 16,
    paddingBottom: 4,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,

    justifyContent: 'flex-end',
   
  },
  orderComponent: {
    flex: 1,
    flexDirection: 'row',
justifyContent: 'flex-end',
position: 'relative',
bottom: 18,
right: 12
  },
  orderContainer: {
    backgroundColor: THEME.COLORS.MAIN_300,
    width: 64,
    height: 18,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  order: {
    fontSize: THEME.FONT_SIZE.SMALL,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: '#FFFFFF',
    letterSpacing: -1,
    lineHeight: 10,
    
  }
});