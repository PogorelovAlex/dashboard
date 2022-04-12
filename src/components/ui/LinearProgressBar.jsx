import * as React from 'react';
import styled, { css } from 'styled-components'
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const fontSFProDisplay = css`
   font-family: 'SF Pro Display';
`;

const ProgressText = styled(Typography)`
    ${fontSFProDisplay}
    font-size: 13px;
    `;

const ProgressTextPercent = styled(Typography)`
    ${fontSFProDisplay}
    font-size: 13px;
    margin-left:7px;
    color:${({ bar_color }) => bar_color};
    `;

const LinearProgressWrapper = styled(Grid)`
display:'flex';
align-items:'center';
max-width:'156px';
max-height:'21px'`

const LinearProgressBar = styled(LinearProgress)`
height:6px;
margin-top:8px;
color:${({ bar_color }) => bar_color};`

function LinearProgressWithLabel(props) {

  return (
    <LinearProgressWrapper  container 
    sx={{ display: 'flex', 
          alignItems: 'center', 
          justifyContent:'center', 
          width:'164px', 
          heght:'34px', 
          marginLeft:'34px' }}>
     <Grid sx={{ width: '100%', mt: 1 }} container directon="row" className="progressBarText">
     
     <ProgressText>
         {props.text}
     </ProgressText>
    
     <ProgressTextPercent barColor = {props.bar_color} >
    {
     props.bar_text === "percent" ?  `${Math.round(props.value,)}%`:`${Math.round(props.value,)}/30`
     }
     </ProgressTextPercent>

      </Grid>
      <Grid sx={{ width: '100%' }}>
        <LinearProgressBar color='inherit' bar_color={props.bar_color} variant="determinate" {...props} />
      </Grid>
      
    </LinearProgressWrapper>
  );
}


export default function LinearWithValueLabel(props) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {

      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    return progress;
   
  }, []);

  return (
    <Grid sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} bar_color={props.bar_color} bar_text={props.bar_text} text = {props.text}/>
    </Grid>
  );
}
