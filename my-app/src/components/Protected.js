import React, { useEffect } from 'react'
import {useNavigate,Outlet, Navigate} from 'react-router-dom'
const Protected = ({role}) => {
    const navigate=useNavigate();
if(!role){
   
    return  <Navigate to={'/login'} />
}

  return (
    <div>
        <Outlet  />

    </div>
  )
}

export default Protected