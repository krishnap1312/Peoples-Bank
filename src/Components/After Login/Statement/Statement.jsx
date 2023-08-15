import React, { useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useFormik } from 'formik'

function Statement() {

  const [data,setdata] = useState({
    From : "",
    To : "",
    RadioChecks :""
  })

  const formik = useFormik({
    initialValues : {
      From : "",
      To : "",
      RadioChecks : "",
    },

    onSubmit : (values)=>{
      setdata(values)
      console.log(data.from);
    }
  })

  return (
    <div>
        <NavigationBar></NavigationBar>
        <div className='' style={{marginLeft:"20vw"}}>
          <h2 className='' style={{fontSize:"6vw"}}>Statement</h2>
          <div className='text-danger'>
            <h1 className='' style={{fontSize:"4vw", marginLeft:"20%"}}>Under Construction</h1>
          </div>
        </div>
    </div>
  )
}

export default Statement