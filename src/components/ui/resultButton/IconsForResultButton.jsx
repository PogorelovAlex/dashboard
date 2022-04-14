import CircleIcon from '@mui/icons-material/Circle';
import Box from '@mui/material/Box';
import styled, { css } from 'styled-components'

const barRed = "#EB5757";
const barGreen = "#28A879";
const barBlue ='#2F80ED';

const StyledCircleIcon = styled(CircleIcon)`
    font-size: 8px;
    border-radius:4px;
    color:${({result_button})=>(result_button === "Отлично" 
    ? barGreen : result_button === "Хорошо" ? barBlue:barRed)}
    `;


export default function IconsForResultButton(props) {
  return (
((()=>{
      switch(props.result_button) {
        case 'Отлично':
          return <Box
                  sx={{
                    width: 30,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                 <StyledCircleIcon result_button ={props.result_button}/> 
                 <StyledCircleIcon result_button ={props.result_button}/> 
                 <StyledCircleIcon result_button ={props.result_button}/> 
                 </Box>
        case 'Хорошо':
          return <Box
                  sx={{
                    width: 50,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                 <StyledCircleIcon result_button ={props.result_button}/> 
                 <StyledCircleIcon result_button ={props.result_button}/> 
            </Box>
        case 'Плохо':
            return <Box
                    sx={{
                      width: 50,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                   <StyledCircleIcon result_button ={props.result_button}/> 
              </Box>
        default:
          return '';
      }
    })())
  );
}

