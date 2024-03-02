import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'

function RegisterForm(){
    let formik = useFormik({
        initialValues:{
            username :'',
            password:'',
            mobile:'',
            email:''
        },

        validationSchema:Yup.object({
            username:Yup.string().required(),
            password:Yup.string().required(),
            mobile:Yup.string().required(),
            email:Yup.string().required(),
        }),
        onSubmit:(data)=>{
            console.log(data);
        }
    })
    return(
        <div>
            <h1>Register Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>Username :</label>
                <input type="text" name="username" onChange={formik.handleChange}/><br />
                <label>Password : </label>
                <input type="number" name="password" onChange={formik.handleChange}/><br />
                <label>Mobile Number :</label>
                <input type="number" name="mobile" onChange={formik.handleChange}/><br />
                <label>E-mail :</label>
                <input type="email" name="email" onChange={formik.handleChange}/><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm