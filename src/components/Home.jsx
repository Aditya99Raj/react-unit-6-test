import axios from "axios";
import { useEffect, useState } from "react";

export const HomePage = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        getData()
    },[])

    const getData =() => {
        axios.get("http://localhost:8080/countries").then((response) => {
           //  console.log(response.data)
            setData(response.data);
        })
   
    }
   
    return (
        <div>
            <table border="2" >
                <thead>
                <tr>
                    <th>id</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Population</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>

                <tbody>
                    {data.map((el,i)=>{
                        return(

                <tr className="table" key={i}>
                    <td >{el.id}</td>
                    <td>{el.country}</td>
                    <td>{el.city}</td>
                    <td>{el.population}</td>
                    <td id="edit">edit</td>
                    <td id="delete">delete</td>
                </tr>
                        )
                    })}
                </tbody>
               
            </table>
        </div>
    )
}