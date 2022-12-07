import { X } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  containerShadow: {
    width: 200,
    height: 272,
    borderRadius: 25,
    marginRight: 32,
    backgroundColor: '#rgba(199, 199, 199, 0.31)',
  },
  container: {
    marginLeft: 12,
    width: 200,
    height: 260,
    flex: 1,
    gap: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderWidth: 0.2,
    // borderColor: 'black',
    //elevation: 8,
   
  
        
  },
  picture: {
    width: 200,
    height: 200,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
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
 
  },
  iprice: {
    fontSize: THEME.FONT_SIZE.MEDIUM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.MAIN_400,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 60,
    paddingLeft: 16,
    paddingTop: 38,
    paddingBottom: 4,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  orderComponent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative',
    bottom: 18,
    right: 14
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