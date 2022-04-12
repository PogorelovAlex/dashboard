import "./callsList.css";
import  {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import CallsService from "../../services/CallsService";
import {observer} from "mobx-react-lite";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function CallsList() {
const {store} = useContext(Context);
// const data = store.calls.data
const [data,setData] = useState(store.calls.data)
// useEffect(() => {       
//   setData(store.calls)   
// },[]);
console.log(store)
console.log(data)

  //  const handleDelete = (id) => {
  //   // setData(data.filter((item) => item.id !== id));
  // };


 const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // {
    //   field: "user",
    //   headerName: "User",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avatar} alt="" />
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    // },
    // { field: "email", headerName: "Email", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
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
            <Grid container display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
           { data ? JSON.stringify(data):"Loading"}
           
            <div className="userList">
              {/* <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
              /> */}
            </div>
            </Grid>
    );
}

export default observer(CallsList);