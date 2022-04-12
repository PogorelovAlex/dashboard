import { createMuiTheme } from "@material-ui/core/styles";

const barRed = "#EB5757";
const barGreen = "#28A879";
const barYellow = "#F2994A";
const mainBlue ='#2F80ED';
const secondBlue ='#091336'


export default createMuiTheme({
  palette: {
    common: {
      barRed: `${barRed}`,
      barGreen: `${barGreen}`,
      barYellow: `${barYellow}`
    },
    primary: {
      main: `${mainBlue}`
    },
    secondary: {
      main: `${secondBlue}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem"
    },
  }
});