import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
 
  const [successMsg, setSuccessMsg] = useState('')
  const navigate = useNavigate()
  // handle on chnage
  const handleChnage = (e) => {
    const { name, value } = e.target;
    setInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // handle submit funtion
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const { email, password } = input;
      const res=await fetch('http://localhost:4000/api/v1/login',{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
          "Content-Type":"application/json",  
        }
      })
   
const result=await res.json()
setLoading(true)

if(result.message && result.success===false){

  setError(result.message)
setLoading(false)
 
}else if(result.message && result.success===true){
setLoading(true)

  setSuccessMsg(result.message)
  localStorage.setItem('token',result.token);
setLoading(false)
  
  setTimeout(() => {
    navigate('/services')
  }, 1500);
}


    } catch (error) {

    
      alert('Something goes Wrong,please try later')


      navigate('/about')
// setLoading(false)

    
    }
  }

  return (
    <div className='container mt-5'>
      <div className='row mt-4 py-5'>
        <div className='col-lg-8 offset-lg-1'>
          <form className='mt-4 form' onSubmit={handleSubmit}>
        <h1 className='text-white text-center'>LOGIN</h1>
        {loading? <h1  className='text-center text-white'>Loading....</h1>:
        <>
          <h4 className='text-danger text-center mt-2'>{error? error:""}</h4>
            <h4 className='text-success text-center mt-2'>{successMsg? successMsg:""}</h4>
        </>
  }
          
            <div className="form-group">
              <label className='text-white' >Email address</label>
              <input type="email" name='email' value={input.email} onChange={handleChnage} className="form-control input" autoComplete='false' placeholder="Enter email" />
            </div>


            <div className="form-group">
              <label className='text-white'>Password</label>
              <input type="password" value={input.password} onChange={handleChnage} name='password' className="form-control input" autoComplete='false' placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-4 p-3">Login</button>
            <br />
            <p className='text-center text-white mt-5'>Don't have an account?      <button className=' ml-2 text-primary bg-dark h5'><Link to='/register'>Create an Account</Link> </button></p>
          </form>



        </div>
      </div>
    </div>

  )
}

export default Login