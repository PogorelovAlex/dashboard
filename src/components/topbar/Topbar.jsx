import React from "react";
import "./topbar.css"; 
import Grid from '@mui/material/Grid';
import { Search, KeyboardArrowDown } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import ViewDate from "../date/ViewDate";
import LinearWithValueLabel from '../ui/LinearProgressBar'
import { StyledEngineProvider } from '@mui/material/styles';






export default function Topbar() {
  const theme = useTheme();
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className="topbar" >
     <Grid container className="topbarWrapper">
        <Grid className="topLeft">
          <span className="date">
            <ViewDate /></span>
        </Grid>
        <Grid sx = {{
          display:'flex',
          flexDirection:'row',
        }} className="linearWithValueLabel" >
          <LinearWithValueLabel bar_color= {theme.palette.common.barGreen} bar_text ='pc'  text = "Новые звонки "/>
          <LinearWithValueLabel bar_color= {theme.palette.common.barYellow} bar_text ='percent' text = "Качество разговоров"/>
          <LinearWithValueLabel bar_color= {theme.palette.common.barRed} bar_text ='percent' text = "Конверсия в заказ"/>
          </Grid>
        <Grid className="topRight">
          <Grid className="topbarIconContainer">
           <Search className ="searchIcon" />
          </Grid>
          <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center" 
          className="topbarIconContainer">
            <div className ="companyNameText">ИП Сидорова Александра Михайловна</div>
            <KeyboardArrowDown className="dropArrow"/>
          </Grid>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          <KeyboardArrowDown className="dropArrow"/>
        </Grid>
      </Grid>
    </Grid>
    </StyledEngineProvider>
    
  );
}
