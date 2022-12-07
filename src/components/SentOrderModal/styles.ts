import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {},
  sentOrderModalComponent: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  sentOrderLogo: {
    width: 180,
    height: 120,
    position: "absolute",
    bottom: 100,
  },
  sentOrderId: {
    marginTop: 140,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SUBTITLE,
  },
  sentOrderModalComponentDiv: {
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
  sentOrderModalComponentIcon: {
    position: "absolute",
    top: 24,
  },
  sentOrderModalComponentText: {
    width: 342,
    marginTop: 42,
    textAlign: "center",
    fontSize: 38,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  sentOrderModalComponentSendButton: {
    width: 116,
    height: 40,
    flexDirection: "row",
    position: "absolute",
    bottom: 22,
    borderRadius: 16,
    backgroundColor: "green",
    fontSize: THEME.FONT_SIZE.SMALL,
    color: "white",
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    alignItems: "center",
    justifyContent: "center",
  },
  sentOrderModalComponentSendButtonText: {
    fontSize: THEME.FONT_SIZE.LARGER,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: "white",
    marginRight: 6,
  },
});
