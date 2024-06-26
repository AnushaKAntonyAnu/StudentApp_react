import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewallStudent = () => {
    const [data, changeData] = useState([])
        
            const fetchData=()=>{
                axios.get("http://localhost:8080/view").then(
                    (response)=>{
                        changeData(response.data)
                    }
                ).catch().finally()
               }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <br></br>
            <Navbar />

            <h3 align="center"><u>ViewAll Student</u></h3><br></br>
            <br></br><h3 align="center" ><u>ViewAll Product</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">

                                <thead>
                                    <tr>
                                        <th scope="col">SNO</th>
                                        <th scope="col">Product ID</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(
                                        (value,index)=>{
                                           return<tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{value.name}</td>
                                            <td>{value.rollno}</td>
                                            <td>{value.admno}</td>
                                            <td>{value.college}</td>
                                        </tr>
                                        }
                                    )}
                                   
                                </tbody>
                            </table>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewallStudent


