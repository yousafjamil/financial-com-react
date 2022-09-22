import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [input, setInput] = useState({ firstname: "", lastname: "", email: "", password: "" });
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChnage = (e) => {
    const { name, value } = e.target;
    setInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  // handle submit fun
  const { firstname, lastname, email, password } = input;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/v1/signup', JSON.stringify({ firstname, lastname, email, password }), {
        headers: {
          "Content-Type": "application/json",
        }
      })
      // const result=await res.json();
      setLoading(true)
      if (res.data.success === false) {
        setLoading(false)
  
        setError(res.data.message)
      } else if (res.data.message && res.data.success === true) {
        setLoading(true)
        setSuccessMsg(res.data.message)
        localStorage.setItem('token', res.data.token)
        setLoading(false)

        setTimeout(() => {
          navigate('/about')
        }, 2000);

      }
      
    } catch (err) {
      setLoading(true)
      alert(err)
      setLoading(false)

    }


  }
  return (
    <div className='container mt-5'>
      <div className='row mt-3 py-4'>
        <div className='col-lg-8 offset-lg-1'>


          <form className='mt-3 form' onSubmit={handleSubmit}  autoComplete='off'>
            <h2 className='text-center text-white'>Create An Account</h2>
<>

{loading? <h1  className='text-center text-white'>Loading....</h1>: <div>
<h3 className='text-danger'>{error ? error : ""}</h3>
            <h3 className='text-success'>{successMsg ? successMsg : ""}</h3>

</div>  }
</>

         
            <div className="form-group">
              <label className='text-white' >Email address</label>
              <input type="email" name='email' value={input.email} onChange={handleChnage} className="form-control input"  placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label className='text-white'>First Name</label>
              <input type="text" name='firstname' value={input.firstname} onChange={handleChnage} className="form-control input"  placeholder="Enter First Name" />
            </div>
            <div className="form-group">
              <label className='text-white'>Last Name</label>
              <input type="text" name='lastname' value={input.lastname} onChange={handleChnage} className="form-control input"  placeholder="Enter Last Name" />
            </div>
            <div className="form-group">
              <label className='text-white'>Password</label>
              <input type="password" name='password' value={input.password} onChange={handleChnage} className="form-control input"  placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-4 p-3">Register</button>
            <br />
            <p className='text-center text-white mt-5'>Already have an account?  <Link to='/login'>   <button className='text-primary bg-dark h5'>  Login</button></Link> </p>
          </form>



        </div>
      </div>
    </div>
  )
}

export default Register