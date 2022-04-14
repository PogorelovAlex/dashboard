import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconsForResultButton from './IconsForResultButton'
import styled, { css } from 'styled-components'


const barRed = "rgba(235, 87, 87, 0.3);";
const barGreen = "rgba(40, 168, 121, 0.3);";
const barBlue ='rgba(47, 128, 237, 0.3);';


const fontSFProDisplay = css`
   font-family: 'SF Pro Display';
`;

const StyledResultButton = styled(Button)`
    ${fontSFProDisplay}
    font-size: 14px;
    width: 70px;
    height: 26px;
    margin-top: 17px;
    margin-bottom: 17px;
    text-transform:none;
    border-radius:4px;
    background-color: ${({type})=>(type === "Отлично" 
    ? barGreen : type === "Хорошо" ? barBlue:barRed)};
    opacity:0.8
    `;

   
export default function ResultButton(props) {
  return (
<Grid container
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        flexDirection:'row'
      }}
    >
      <Grid item>
         <IconsForResultButton  result_button = {props.type}/>
      </Grid>
      <Grid item>
        <StyledResultButton type ={props.type} variant = "contained" >
        {props.type}
      </StyledResultButton> 
      </Grid>
    </Grid>
  
  );
}