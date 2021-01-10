import React, { useEffect, useState } from 'react';
import {Table,TableCell,TableRow,TableHead,TableBody,Card} from '@material-ui/core'
import axios from "axios";

 const Tabledata=()=>{

    const [data, setData] = useState([]);

    useEffect( () => {
            axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
                console.log(res);
                setData(res.data);
               // console.log(res.data)
            }).catch((error) => {
                console.log(error);
            });
        },[])

        return (
            <div>
                <h1> Table Data </h1>

                <Card style={{width:"80%", margin:"5% 10% 0% 10%", border:"1px solid green"}}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">Website</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell align='center'>
                            {row.name}
                        </TableCell>
                        <TableCell align="center">{row.username}</TableCell>
                        <TableCell align="center">{row.phone}</TableCell>
                        <TableCell align="center">{row.website}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </Card>
                
            </div>
        );
    }

export default Tabledata;
