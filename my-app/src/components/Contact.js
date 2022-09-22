import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const [input, setInput] = useState({ firstname: "", lastname: "",subject:"",message:"" })
    const [error, setError] = useState('')
   
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
// handle submit fun
const  handleSubmit=async(e)=>{
 e.preventDefault();
 try {
    const {firstname,lastname,subject,message}=input
    const res=await fetch('http://localhost:4000/api/v1/addmessage',{
        method:"post",
        body:JSON.stringify({firstname,lastname,subject,message}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    const result=await res.json();
    if( result.success===false){
      
        setError(result.message)
        
      
        
    }else if(result.success===true){
        setSuccessMsg(result.message)
        console.log(result)
    } } catch (error) {
    alert('something goes Wrong try later',error)
 }
}
    return (
        <>
            <div className='contact-container container-fluid'>
                <div className='row  no-gutters'>
                    <div className='col-lg-12 contact-header padding-0'>
                        <h1 className='text-center text-white mb-4 '>GET IN TOUCH</h1>
                    </div>
                </div>
                {/*2nd row */}
                <div className='row'>
                    <div className='col-lg-7'>
                        <h1 className='text-center text-white mt-5 ml-2 '>FEEL FREE TO DROP US A MESSAGE</h1>
                        <p className='text-center contact-p'>Need to speak to us? Do you have any queries or suggestions? Please contact us about all enquiries including <br /> membership and volunteer work using the form below</p>

                    </div>
                </div>
                {/* form row */}
                <div className='row mt-4'>
                    <div className='col-lg-5 offset-lg-1'>
                       
                    <h5 className='text-danger text-center'>{error? error:""}</h5>
                    <h5 className='text-success text-center'>{successMsg? successMsg:""}</h5>

                        <form  onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name='firstname' value={input.firstname} autoComplete='false' onChange={handleChnage} className="form-control input"  placeholder="FIRST NAME" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="text" name='lastname' value={input.lastname} autoComplete='false' onChange={handleChnage} className="form-control input" placeholder="LAST NAME" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="text" name='subject' value={input.subject} autoComplete='false' onChange={handleChnage} className="form-control input" placeholder="SUBJECT" />
                            </div>
                            <br/>
                            <textarea className="form-control input" name='message' value={input.message} onChange={handleChnage}  placeholder='MESSAGE' rows="5"></textarea>
                            <br/>
                            <button type="submit" className="btn btn-primary w-50 mt-3 p-3">SEND MESSAGE</button>
                        </form>

                    </div>
                </div>


            </div>


        </>
    )
}

export default Contact