import axios from 'axios';
import "./callsList.css";
import ResultButton from '../../components/ui/resultButton/ResultButton';
import  { useEffect, useState} from 'react';
import { useTheme } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import Grid from '@mui/material/Grid';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CircularProgress from '@mui/material/CircularProgress';
import secondsToHms from '../../utils/SecToMin'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';





const API_URL_CALLS = `https://api.skilla.ru/mango/getList?date_start=2022-04-11& date_end=2022-04-12`


const token = `qwerty123`;

const config = {
  headers: { 
  Authorization: `Bearer ${token}`,
 }
};


const bodyParameters = {
  key: "value",
  responseType: 'blob'
};
function CallsList() {
  const theme = useTheme();
  const [rows, setRows]= useState([]);


  useEffect(() =>{
    const fetchCalls = async() => {
      await axios.post(API_URL_CALLS,bodyParameters,config).then(response => (setRows( response.data))).catch(error => {
        console.log("error", error);
      });;
     
  }
    fetchCalls();
 
  }, []);

  const handlerPlayAudio = (record, partnership_id) => {
    let audio ='';
    const fetchRecord = async() => {
      await axios.post(`https://api.skilla.ru/mango/getRecord? record=${record}& partnership_id=${partnership_id}`,bodyParameters,config).then(response => (audio = response.data)).catch(error => {
        console.log("error", error);
      });;
     
  }
  fetchRecord();
function play (audio) {
      var audio = new Audio(`${audio}`);
      audio.play();
    }
  }
 const columns = [
    { field: "in_out", headerName: "Тип", width: 100, renderCell: (params) => {
      const succesCall = '1';
      const faildCall = '0';
      const arrowColor = params.row.time === faildCall ? theme.palette.common.barRed :  params.row.in_out === succesCall ? theme.palette.common.barGreen:theme.palette.primary.main;

      return (
        <div className="callType">
          {params.row.in_out === succesCall ? <CallMadeIcon sx={{
            color:arrowColor}}/> : <CallReceivedIcon sx={{color:arrowColor}} /> }
        </div> 
        )}},
    {
      field: "date",
      headerName: "Время",
      width: 200,
      renderCell: (params) => {
        const callTime = params.row.date.slice(-9, -3);
        return (
          
          <div className="callType">
            {callTime}
          </div>
        );
      },
    },
    { field: "person_avatar", headerName: "Сотрудник", width: 145,
  renderCell: (params) => {
      return (
        <div className="callType">
          <img className="personImg" src={params.row.person_avatar} alt="" />
        </div>
      );
    }, 
  },
    {
      field: "from_number",
      headerName: "Звонок",
      width: 200,
    renderCell: (params) => {
      return (
        <div className="callType">
          {`+${params.row.from_number}`}
        </div>
      );
    },
    },
    {
      field: "contact_company",
      headerName: "Источник",
      width: 200,
    renderCell: (params) => {
      return (
        <div className="callType">
          {params.row.contact_company}
        </div>
      );
    },
    },
    {
      field: "grade",
      headerName: "Оценка",
      width: 200,
      renderCell: (params) => {
      const callDuration = Number(params.row.time);
        const callResult = callDuration === 0 ? 'Плохо': (callDuration >= 1 && callDuration <= 120) ?'Хорошо': callDuration > 120 ? 'Отлично': '';
       
        return (
          <div className="callType">
            {<ResultButton type = {callResult} />}
          </div>
        );
      },
    },
    {
      field: "duration",
      headerName: "Длительность",
      width: 300,
      renderCell: (params) => {
        const callDurationFormatMin = secondsToHms(params.row.time) ;
       
        return (
          <div className="callDuration">
           <div>{callDurationFormatMin}</div> 
           <div className='callDurationIcon'>{Number(params.row.time) > 0 && 
           <PlayCircleIcon onClick={()=>{handlerPlayAudio(params.row.record,params.row.partnership_id)}}/>
           }
           
          </div> 
  
          </div>
        );
      },
    },
  ];
   
    
    return (
            <Grid container  display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ width:"100%"}} >
           { rows.length > 0 ? 
           <Grid className="dataGridWrapper">
              <DataGrid
                autoHeight
                className='dataGrid'
                rows={rows}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
              />
            </Grid> : <CircularProgress size = "20" />}
           
            </Grid>
    );
}

export default CallsList;