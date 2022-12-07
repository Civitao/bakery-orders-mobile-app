import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {

  },
 removedModalComponent: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
 removedModalComponentDiv: {
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
 removedModalComponentIcon: {
    position: 'absolute',
    top: 24,

  },
 removedModalComponentText: {
    width: 270,
    paddingBottom: 24,
    textAlign: 'center',
    fontSize: 38,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
 removedModalComponentOkButton: {
    width: 80,
    height: 40,
    position: 'absolute',
    bottom: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
 removedModalComponentOkButtonText: {

    fontSize: THEME.FONT_SIZE.LARGER,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  },
 
});