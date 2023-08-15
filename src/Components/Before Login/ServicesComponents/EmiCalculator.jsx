import React, { useState } from 'react'

function EmiCalculator() {
  const [details, setdetails] = useState({
    "Principal" : "",
    "Interest" : "",
    "Months" : "",
  })

  const [tempdetails, tempsetdetails] = useState({
    "Principal" : "",
    "Interest" : "",
    "Months" : "",
  })

  const handleonchnage = (event) =>{
    const [name,value] = event.target
    tempsetdetails((preval)=>{
      return{
        ...preval,
        [name]: value
      }
    })
  } 
  
  return (


    <div>
    
      <form>
        <dl>
          <dt>Principal</dt>
          <dd><input type="text" name="Principal" onChange={handleonchnage()} /></dd>
          <dt>Rate of Interest</dt>
          <dd><input type="text" name="Interest" onChange={handleonchnage()} /></dd>
          <dt>Tenure in Months</dt>
          <dd><input type="text" name="Months" onChange={handleonchnage()} /></dd>
        </dl>
      </form>
    </div>
  )
}

export default EmiCalculator