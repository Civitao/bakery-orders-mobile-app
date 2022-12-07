import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {

  },
 requestFlavorModalComponent: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
 requestFlavorModalComponentDiv: {
    position: 'absolute',
    top: 300,
    left: 47,
    width: 320,
    height: 200,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000000',
    alignItems: 'center',
  },
 requestFlavorModalComponentIcon: {
    position: 'absolute',
    top: 12,

  },
 requestFlavorModalComponentText: {
    paddingBottom: 12,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
 requestFlavorModalComponentOkButton: {
    width: 80,
    height: 40,
    position: 'absolute',
    bottom: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
 requestFlavorModalComponentOkButtonText: {

    fontSize: THEME.FONT_SIZE.LARGER,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  },
 
});