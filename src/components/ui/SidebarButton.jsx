import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ErrorIcon from '@mui/icons-material/Error';
import styled, { css } from 'styled-components'

const fontSFProDisplay = css`
   font-family: 'SF Pro Display';
`;

const SideButton = styled(Button)`
*:first-of-type svg{
    font-size: 35px;
    color: rgba(250, 250, 250, 0.5);
    
  }
    ${fontSFProDisplay}
    font-size: 16px;
    width: 200px;
    height: 52px;
    background-color: #005FF8;
    margin-top: 34px;
    text-transform:none;
    border-radius:4px;
    color: rgba(250, 250, 250, 0.8)
    `;

export default function SideBarButton(props) {
    const buttonIcon = props.type === 'add' ? <AddCircleIcon  />: <ErrorIcon  />
  return (
      <SideButton variant="contained" endIcon={buttonIcon}>
        {props.type === 'add' ? 'Добавить заказ':'Оплата'}
      </SideButton>
  
  );
}