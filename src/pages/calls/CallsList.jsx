import axios from 'axios';
import "./callsList.css";
import  {useContext, useEffect, useState} from 'react';
import { useTheme } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';




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
          
          <div className="callTime">
            {callTime}
          </div>
        );
      },
    },
    { field: "person_avatar", headerName: "Сотрудник", width: 145,
  renderCell: (params) => {
      return (
        <div className="personAvatar">
          <img className="personImg" src={params.row.person_avatar} alt="" />
        </div>
      );
    }, 
  },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // renderCell: (params) => {
    //   return (
    //     <div className="userListUser">
    //       <img className="userListImg" src={params.row.person_avatar} alt="" />
    //       {params.row.person_name}
    //     </div>
    //   );
    // },
    // },
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
           { rows ? 
           <Grid className="dataGridWrapper">
              <DataGrid
                autoHeight
                className='dataGrid'
                rows={rows}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
              />
            </Grid> :"Loading"}
           
           
            </Grid>
    );
}

export default CallsList;