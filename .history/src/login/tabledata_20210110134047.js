import React, { Component, useEffect, useState } from 'react';

const tabledata=()=> {

    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch('https://reqres.in/api/unknown').then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        })
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

export default tabledata;
