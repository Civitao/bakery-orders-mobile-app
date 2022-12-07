import { StyleSheet } from 'react-native';
import { Background } from '../../components/Background';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  
    
  },
  cartButtonShadow: {
    position: 'absolute',
      top: 52,
      left: 32,
    width: 48,
    height: 48,
    zIndex: 1,
    borderRadius: 25,
    backgroundColor: '#rgba(199, 199, 199, 0.31)'
  },
  cartButton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 2,     
      width: 46,
      height: 46,
      borderRadius: 25,
      backgroundColor: 'white',
      zIndex: 2,
  },
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: THEME.COLORS.MAIN_300,
    position: 'absolute',
    top: 5,
    right: 5
  },
  badgeNum: {
    fontSize: 12
  },
  searchButtonShadow: {
    position: 'absolute',
    top: 52,
    right: 32,
    width: 48,
    height: 48,
    zIndex: 1,
    borderRadius: 25,
    backgroundColor: '#rgba(199, 199, 199, 0.31)'
    
  },
  searchButton: {
    marginLeft: 2,
    width: 46,
    height: 46,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 14
  },
  logo: {
    marginTop: 32,
    width: 360,
    height: 280,
    // opacity: 0

  },

  menuContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    marginRight: 0,
    alignItems: 'center'

  }, 
  Ocontainer: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.MAIN_200,
    borderRadius: 30,
    marginLeft: 18
    
  },
  menuName: {
    color: '#FFFFFF',
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MEDIUM,
    marginLeft: 12
  },
  active: {
    width: 130,
    height: 50,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.MAIN_300,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 8,
    marginRight: 2
    
        
    
  },
  activeBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 42,
    backgroundColor: '#FFFFFF',
    borderRadius: 50 
  },

  toggleMenu: {
    width: 300,
    height: 60,
  },

  contentList: {
  
    paddingLeft: 38,
    paddingRight: 16,

    height: 280
  
  },
  popular: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SUBTITLE,
    color: THEME.COLORS.TEXT_BLACK,
    flex: 1,
    position: 'absolute',
    left: 38 ,
    bottom: 140
  },
  contentListTwo: {
    marginTop: 12,
    paddingLeft: 38
  },
  itemO: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleO: {
    fontSize: 32,
  },
  containerO: {
    width: 320,
    alignItems: 'center'
  },
  emptyText: {
    fontSize: 20,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingTop: 32
  },
  menuButtonShadow: {
    width: 58,
    height: 60,
    borderRadius: 40,
    marginHorizontal: 6,
    backgroundColor: '#rgba(199, 199, 199, 0.31)'
  },
  menuButton: {
    borderRadius: 30,
    width: 58,
    height: 58,
    backgroundColor: THEME.COLORS.MAIN_200,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2
  },
  activeButtonShadow: {
    
  },
  activeButton: { 

    borderRadius: 40,
    marginRight: 12,
    marginLeft: 6,
    width: 120,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
  
   },
  buttonName: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: '#FFFFFF',
    fontSize: 14
  },
});