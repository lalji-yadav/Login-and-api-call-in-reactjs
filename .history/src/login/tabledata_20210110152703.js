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
                    {/* {data.map((id)=>{
                        <tr key={id.id}>
                            <td>{id.name}</td>
                        </tr>
                    })} */}

                    <tr>{data.map((id)=>(
                          <td key={id.id}>{id.name}</td>
                    ))}
                    </tr>

                {/* {
                data.map((numList,i) =>(
                   <tr key={i}>
                    {
                      numList.map((num,j)=>
                         <td key={j}>{num}</td>
                      )
                    }
                   </tr>
                ))
               } */}

                </table>
                
            </div>
        );
    }

export default Tabledata;
