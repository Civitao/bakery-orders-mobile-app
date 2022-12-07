import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  goBackButton: {
    width: 32,
    height: 32, 
    marginLeft: 26,
    alignItems: 'center',
  },
  goHomeButton: {
    alignItems: 'center',
    width: 24,
    height: 24,
    marginRight: 26
  },
  header: {
    marginTop: 12,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#FFFFFF',      
  },
  headerTittle: {
    fontSize: THEME.FONT_SIZE.TITLE,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT_BLACK,
  },
  searchContainerShadow: {
    width: '100%',
    height: 56,
    borderRadius: 20,
    backgroundColor: '#rgba(199, 199, 199, 0.31)',
    marginBottom: 4
  },
  searchContainer: {
    paddingRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    
  },
  searchInput: {
    width:  '94%',
    height: 50,
    color: '#000000',
    paddingLeft: 52,
    fontSize: 22,
  },
  searchResults: {
    width: '96%',
    height: 710,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchContainerFlat: {
    paddingLeft: 4,
    marginTop: 14,
    paddingBottom: 44,
    backgroundColor: '#FFFFFF',
  },
});