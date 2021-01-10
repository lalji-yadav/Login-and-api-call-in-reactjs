import React, { Component, useEffect, useState } from 'react';
import axios from "axios";

 const Tabledata=()=>{

    const [data, setData] = useState([]);

    useEffect( () => {
            axios.get('https://reqres.in/api/unknown').then((res) => {
                //console.log(res.data);
                setData(res);
            }).catch((error) => {
                console.log(error);
            });
        })

        return (
            <div>
                <h1> Table Data </h1>

                <table>
                    <tr>
                        <td>A</td>
                        <td>A</td>
                        <td>A</td>
                        <td>A</td>
                        
                    </tr>
                </table>
                
            </div>
        );
    }

export default Tabledata;
