import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {

  },
  delModalComponent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  delModalComponentDiv: {
    position: "absolute",
    top: 180,
    left: 25,
    width: 360,
    height: 420,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
  },
  delModalComponentIcon: {
    position: "absolute",
    top: 24,
  },
  delModalComponentText: {
    textAlign: "center",
    fontSize: 38,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingBottom: 40,
  },
  delModalComponentCancelButton: {
    width: 100,
    height: 35,
    position: "absolute",
    bottom: 22,
    left: 42,
  },
  delModalComponentCancelButtonText: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LARGE,
  },
  delModalComponentRemoveButton: {
    position: "absolute",
    bottom: 24,
    right: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 100,
    height: 38,
    backgroundColor: THEME.COLORS.SUCCESS,
  },
  delModalComponentRemoveButtonText: {
    color: "white",
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});