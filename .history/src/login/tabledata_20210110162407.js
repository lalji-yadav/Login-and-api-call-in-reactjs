import React, { Component, useEffect, useState } from 'react';
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

                <table>
                    <th>
                        <td>A</td>
                        <td>A</td>
                        <td>A</td>
                        <td>A</td>
                        
                    </th>
                    <tbody>
                        {data.map((id)=>(
                            <tr key={id.id}>
                                <td> {id.name} </td>
                                <td>{id.username}</td>
                                <td>{id.phone}</td>
                                <td>{id.website}</td>
                             </tr>
                        ))}
                    </tbody>

                </table>
                
            </div>
        );
    }

export default Tabledata;
