import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import "../Registration/SignUp.css";

import userlogo from "../Registration/user.png";

const SignUp = () => {
    const initialValues = {
        username: "",
        firstname: "",
        lastname: "",
        dateofbirth: "",
        emailId: "",
        password: "",
        conformPassword: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("username is mandatory..."),
        firstname: Yup.string().required("firstname is required!"),
        dateofbirth: Yup.date().required("Date of birth is required"),
        emailId: Yup.string().email("Invalid email format").required("required"),
        password: Yup.string().min(5, "week password").max(10, "password too long").required("password must required!"),
        conformPassword: Yup.string().oneOf([Yup.ref("password"), "password should match"]),
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
    });

    console.log("form", formik.values);

  return (
    <section className='row' style={{justifyContent: 'center'}}>
    <div className='register mt-5 col-4'>
        <form onSubmit={formik.handleSubmit} noValidate>
            <img src={userlogo} alt={userlogo} />
            <h3 className='user-pro text-center'>USER</h3>
            <label htmlFor='user' className='form-label'>UserName</label>
            <input className='form-control' type='text' name='username' id='user' {...formik.getFieldProps("username")} />
            <p className='error'>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>

            <label htmlFor='fname' className='form-label'>First Name</label>
            <input className='form-control' type='text' name='firstname' id='fname' {...formik.getFieldProps("firstname")}/>
            <p className='error'>{formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname : ""}</p>

            <label htmlFor='lname' className='form-label'>Last Name</label>
            <input className='form-control' type='text' name='lastname' id='lname' {...formik.getFieldProps("lastname")}/>

            <label htmlFor='dob' className='form-label'>Date-of-Birth</label>
            <input className='form-control' type='date' name='dateofbirth' id='dob' {...formik.getFieldProps("dateofbirth")} />
            <p className='error'>{formik.touched.dateofbirth && formik.errors.dateofbirth ? formik.errors.dateofbirth : ""}</p>

            <label htmlFor='email' className='form-label'>Email Id</label>
            <input className='form-control' type='email' name='emailId' id='email' {...formik.getFieldProps("emailId")}/>
            <p className='error'>{formik.touched.emailId && formik.errors.emailId ? formik.errors.emailId : ""}</p>

            <label htmlFor='pass' className='form-label'>Password</label>
            <input className='form-control' type='password' name='password' id='pass' {...formik.getFieldProps("password")} />
            <p className='error'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>

            <label htmlFor='cpwd' className='form-label'>Confirm Password</label>
            <input className='form-control' type='password' name='conformPassword' id='cpwd' {...formik.getFieldProps("conformPassword")}/>
            <p className='error'>{formik.touched.conformPassword && formik.errors.conformPassword ? formik.errors.conformPassword : ""}</p>

            <input className='form-check-input' type="checkbox" id="invalidCheck" />
            <label htmlFor="invalidCheck" className='form-check-label'>Agree to terms and conditions</label>
            
            <div className="button">
                <button type='submit' className='btn btn-primary'>SignUp</button>
            </div>
        </form>
    </div>
    </section>
  )
}

export default SignUp;