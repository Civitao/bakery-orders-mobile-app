import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  containerShadow: {
    
    width: 390,
    backgroundColor: '#rgba(198, 198, 198, 0.4)',
    height: 130,
    marginBottom: 12,
    borderRadius: 20,
  },
  mainContainer: {
    marginLeft: 12,
    width: 390,
    height: 120,
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: 14,
  },
  image: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  detailsContainer: {
    width: 260,
    height: 120,
    paddingTop: 8,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 12,
    backgroundColor: '#FFFFFF'
},
itemName: {
  fontSize: THEME.FONT_SIZE.LARGER,
  fontFamily: THEME.FONT_FAMILY.BOLD,
},
itemQuantity: {
  lineHeight: 16,
  fontSize: THEME.FONT_SIZE.LARGE,
  fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  
},
itemFlavor: {
  color: THEME.COLORS.TEXT_GRAY,
  fontSize: THEME.FONT_SIZE.MEDIUM
},
itemPrice: {
  fontSize: THEME.FONT_SIZE.LARGER,
  fontFamily: THEME.FONT_FAMILY.BOLD,
  color: THEME.COLORS.MAIN_400,
  position: 'absolute',
  bottom: 6,
  left: 12,
},
removeButton: {
  position: 'absolute',
  width: 75,
  height: 22,
  top: 90,
  left: 160,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: THEME.COLORS.MAIN_300,
},
removeButtonText: {
  color: 'white',
  fontFamily: THEME.FONT_FAMILY.REGULAR,
  fontSize: THEME.FONT_SIZE.SMALL
},

});