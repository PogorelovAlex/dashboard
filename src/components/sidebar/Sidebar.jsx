import "./sidebar.css";
import {
  DoneAll,
  Timeline,
  LocalPhoneOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  WorkOutlineOutlined,
  LocalLibraryOutlined,
  SettingsOutlined,
  MailOutline,
} from "@material-ui/icons";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import logo from '../ui/svg/logo.svg';
import { Link } from "react-router-dom";
import SideBarButton from '../ui/SidebarButton'
import styled, { css } from 'styled-components'


const fontSFProDisplay = css`
   font-family: 'SF Pro Display';
`;

const SidebarListItemText = styled(Typography)`
    ${fontSFProDisplay}
    font-size: 16px;
    `;


export default function Sidebar() {
  return (
    <Grid className="sidebar">
      
        <Grid className="sidebarMenu">
          <Grid className="logo">
            <img alt="logo"  src={logo}/>
            </Grid>
          <Grid className="sidebarWrapper">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem ">
              <Timeline className="sidebarIcon" />
              <SidebarListItemText>Итого</SidebarListItemText>
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
            <DoneAll className="sidebarIcon"/>
              <SidebarListItemText>Заказы</SidebarListItemText>
            </li>
            </Link>
           
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
           <SidebarListItemText>Сообщения</SidebarListItemText>
            </li>
            
            <Link to="/calls" className="link">
            <li className="sidebarListItem">
              <LocalPhoneOutlined className="sidebarIcon" />
           <SidebarListItemText>Звонки</SidebarListItemText>
            </li>
           </Link>
            
            <li className="sidebarListItem">
              <PeopleAltOutlined className="sidebarIcon" />
           <SidebarListItemText>Контрагенты</SidebarListItemText>
            </li>
            <li className="sidebarListItem">
              <FeedOutlinedIcon className="sidebarIcon" />
           <SidebarListItemText>Документы</SidebarListItemText>
            </li>
            <li className="sidebarListItem">
              <PersonOutlined className="sidebarIcon" />
           <SidebarListItemText>Исполнители</SidebarListItemText>
            </li>
            <li className="sidebarListItem">
              <WorkOutlineOutlined className="sidebarIcon" />
           <SidebarListItemText>Отчеты</SidebarListItemText>
            </li>
            <li className="sidebarListItem">
              <LocalLibraryOutlined className="sidebarIcon" />
           <SidebarListItemText>База знаний</SidebarListItemText>
            </li>
            <li className="sidebarListItem">
              <SettingsOutlined className="sidebarIcon" />
           <SidebarListItemText>Настройки</SidebarListItemText>
            </li>
          </ul>
        </Grid>

      </Grid>

    <Grid container direction='column' diplay='flex' alignItems='center'>
      <Grid>
        <SideBarButton type = "add" />
      </Grid>

      <Grid>
        <SideBarButton type = "pay" />
      </Grid>
    </Grid>

    </Grid>
  );
}
