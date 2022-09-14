import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../Login/Login.css";
import { useEffect } from "react";


const Login = () =>{

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const signUpSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    pass : Yup.string().required("password can't be empty").min(8, "password week").max(16, "password too long")
  });

  const handleChange = (e) =>{
    e.preventDefault();
    setUserData({
      ...userData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (values) =>{
    console.log(values);

    alert("user logged in...");
  }

  return (
    <section>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Login</button>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Login</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div onSubmit={handleSubmit} noValidate>
  <div className="form-group">
    <label htmlFor="username">UserName</label>
    <input type="email" className="form-control" id="username" name='username' placeholder="username" value={userData.username} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name='password' placeholder="Password" value={userData.password} onChange={handleChange}/>
  </div>
  <div className="modal-footer">
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
    </section>
  )
}

export default Login;