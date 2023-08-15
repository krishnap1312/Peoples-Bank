import { ErrorMessage, useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"

function OpenAccount() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      FirstName : ""
    },
    onSubmit:(values)=>{
      alert("values")
      navigate("/UserLogin")
    },
    validationSchema : yup.object({
      FirstName : yup.string().required()
    })
  })
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <dl>FirstName</dl>
        <input type="text" name="FirstName" onChange={formik.handleChange} id="" />
        <ErrorMessage name='FirstName'></ErrorMessage>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default OpenAccount