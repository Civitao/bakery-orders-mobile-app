import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
  backgroundColor: '#FFFFFF'
  },
  hello: {
    color: THEME.COLORS.TEXT_BLACK,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MEDIUM
  },
  goBack: {
    position: 'absolute',
    top: 64,
    left: 24,
    zIndex: 2
  },
  productImage: {
    width: '100%',
    height: 360
  },
  mainContainer: {
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: '#FFFFFF',
    height: '100%'
  },
  flavorsNQuantity: {
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  flavorsNQuantityText:{
    fontSize: 20,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    letterSpacing: -0.8
  },
  flavorsContainer: {
  
  },

  dropdownContainerShadow: {
    width: 164,
    height: 26,
    borderRadius: 10,
    backgroundColor: '#rgba(199, 199, 199, 0.31)'
  },
  dropdownContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: 164,
    height: 24,
    fontSize: THEME.FONT_SIZE.SMALL,
    borderRadius: 10,   
    marginLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    paddingRight: 4,

  },
  dropdownText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MEDIUM,
    marginRight: 8,
    
   
  },
  flavorSelect: {
    fontSize: THEME.FONT_SIZE.MEDIUM,
  },
  selectAFlavor: {
    position: 'absolute',
    top: 24,
    left: 24,
    color: 'white',
    fontSize: 32,
  },
  renderedContainer:{
    position: 'absolute',
    backgroundColor: THEME.COLORS.MAIN_200,
    zIndex: 2,
  },

  quantityContainer: {

  },
  quantityComponent: {
    paddingTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
   },
   quantityMinusShadow: {
      width: 30,
      height: 30,
      backgroundColor: '#rgba(199, 199, 199, 0.31)',
      borderRadius: 20,
  
   },
  quantityMinus: { 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 2,
    width: 28,
    height: 28,
    backgroundColor: THEME.COLORS.MAIN_200,
  },
  quantityPlusShadow: {
    width: 30,
    height: 30,
    backgroundColor: '#rgba(199, 199, 199, 0.31)',
    borderRadius: 20,
    
  },  
  quantityPlus: { 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 2,
    width: 28,
    height: 28,
    backgroundColor: THEME.COLORS.MAIN_300,
  },  
  quantityInt: { 
    fontSize: THEME.FONT_SIZE.LARGE,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    paddingRight: 4,
    paddingLeft: 4,
  },
  productDescription: {
      fontSize: THEME.FONT_SIZE.LARGE,
      color: THEME.COLORS.TEXT_GRAY,
      letterSpacing: 1,
      paddingTop: 32,
      height: 230
  }, 
  productName: {
    fontSize: THEME.FONT_SIZE.EXTRA_LARGE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  productPrice: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SUBTITLE,
    color: THEME.COLORS.MAIN_400,
  },
  footer: {
    paddingTop: 48,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addItemButtonShadow: {
    width: 124,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#rgba(199, 199, 199, 0.31)'
  },
  addItemButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 124,
    height: 36,
    marginLeft: 4,
    borderRadius: 20,
    backgroundColor: THEME.COLORS.MAIN_300,
  },
  addItemButtonText: { 
    paddingRight: 2,
    color: 'white',
    fontSize: THEME.FONT_SIZE.LARGER,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  dropdownArrow: {
    position:'absolute',
     right: 6
    
  },
  flavorName: {
    fontSize: THEME.FONT_SIZE.LARGE,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    letterSpacing: -0.1,
    color: 'black',
    paddingBottom: 6,
    paddingTop: 6,
  
  },
  openedModal: {
   width: 160,
   height: 0,
  },

  dropdownList: {
  
      alignItems: 'center',
      width: 164,
      position: 'absolute',
      backgroundColor: 'white',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      top: 464,
      left: 32,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderColor: '#rgba(199, 199, 199, 0.31)',
      borderLeftWidth: 0.9,
      borderRightWidth: 0.9,
      borderTopWidth: 0.2,
      borderBottomWidth: 0.9,
      
  },
  dropdownListCancelTouch: {
    width: '100%',
    height: '100%'
  },
  dropdownTouchable:{
    width: 160,
   
  
  },

});