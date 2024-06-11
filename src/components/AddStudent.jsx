import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "rollno": "",
            "admno": "",
            "college": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully added")
                } else {
                   alert("error") 
                }
            }
        )
    }
    return (
        <div>
            <Navbar />
            <h3 align="center" ><u>Student Registration</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control"  name='name' value={data.name} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission No</label>
                                <input type="text" className="form-control"  name='admno' value={data.admno} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll No</label>
                                <input type="text" className="form-control"  name='rollno' value={data.rollno} onChange={inputHandler}  />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College Name</label>
                                <input type="text" className="form-control"  name='college' value={data.college} onChange={inputHandler}  />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent