import React, { Component, useEffect, useState } from 'react';
import axios from "axios";

 const Tabledata=()=>{

    const [data, setData] = useState([]);

    useEffect( () => {
            axios.get('https://reqres.in/api/unknown').then((res) => {
                console.log(res);
                setData(res.data.data);
                console.log(res.data.data)
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
                    {/* <tr>{data.map((id)=>(
                          <td key={id.id}>A</td>
                    ))}
                       
                    </tr> */}
                </table>
                
            </div>
        );
    }

export default Tabledata;
