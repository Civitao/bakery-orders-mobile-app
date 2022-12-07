import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {

  },
  addModalComponent: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  addModalComponentDiv: {
    position: 'absolute',
    top: 180,
    left: 25,
    width: 360,
    height: 420,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000000',
    alignItems: 'center',
  },
  addModalComponentIcon: {
    position: 'absolute',
    top: 24,

  },
  addModalComponentText: {
    paddingBottom: 12,
    textAlign: 'center',
    fontSize: 38,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  addModalComponentOkButton: {
    width: 80,
    height: 40,
    position: 'absolute',
    bottom: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addModalComponentOkButtonText: {

    fontSize: THEME.FONT_SIZE.LARGER,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
 
});