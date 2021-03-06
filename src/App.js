import Sidebar from "./components/sidebar/Sidebar";
import GlobalFonts from './components/ui/fonts/fonts';
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallsList from './pages/calls/CallsList';
import Grid from '@mui/material/Grid';

function App() {



  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalFonts /> 
      <Grid container  sx={{ backgroundColor:"#E5E5E5"}} display="flex" flexDirection="row" flexWrap="nowrap">
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid container  className="wrapper" sx={{ width:"100%"}} display="flex" flexDirection="column" >

         <Topbar />  
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calls">
            <CallsList />
          </Route>
        </Switch>
      </Grid>
      
    </Grid>
      
    </Router>
    </ThemeProvider>
  );
}

export default App;
