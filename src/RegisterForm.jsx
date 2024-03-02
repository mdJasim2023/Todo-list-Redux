import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'

function RegisterForm(){
    let dispatch = useDispatch()
    let formik = useFormik({
        initialValues:{
            username :'',
            password:'',
            mobile:'',
            email:''
        },

        validationSchema:Yup.object({
            username:Yup.string().required().min(6,'Username must be 6 charcters'),
            password:Yup.string().required().min(6,'Password must be 6 numbers'),
            mobile:Yup.string().required().min(10,'Phone number must be 10 number').max(10,'Phone number must be 10 number'),
            email:Yup.string().required().email(),
        }),
        onSubmit:(data)=>{
            dispatch({type:'Add',payload:data})
        }
    })
    return(
        <div>
            <h1>Register Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>Username :</label>
                <input type="text" name="username" onChange={formik.handleChange}/><br />
                <div></div>
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