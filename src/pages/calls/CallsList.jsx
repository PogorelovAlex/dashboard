import axios from 'axios';
import "./callsList.css";
import  { useEffect, useState} from 'react';
import { useTheme } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import Grid from '@mui/material/Grid';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CircularProgress from '@mui/material/CircularProgress';




const API_URL = `https://api.skilla.ru/mango/getList?date_start=2022-04-11& date_end=2022-04-12`
const token = `qwerty123`;

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
  key: "value"
};
function CallsList() {
  const theme = useTheme();
  const [rows, setRows]= useState([]);

  useEffect(() =>{
    const fetchCalls = async() => {
      await axios.post(API_URL,bodyParameters,config).then(response => (setRows( response.data))).catch(error => {
        console.log("error", error);
      });;
     
  }
    fetchCalls();
 
  }, []);

console.log(rows)

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
      width: 120,
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
      width: 150,
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
      width: 150,
    renderCell: (params) => {
      return (
        <div className="callType">
          {params.row.contact_company}
        </div>
      );
    },
    },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/user/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
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