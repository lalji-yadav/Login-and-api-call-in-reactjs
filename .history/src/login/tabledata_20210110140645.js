import React, { Component, useEffect, useState } from 'react';
import axios from "axios";

const tabledata=()=> {

    //const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('').then(response => {
    //       const data = JSON.parse(response)
    //       setData(data)
    //     })
    //   }, [])

    useEffect( () => {
            axios.get('https://reqres.in/api/unknown').then((res) => {
                console.log(res);
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

export default tabledata;
