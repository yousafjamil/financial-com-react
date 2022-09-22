import React, { useEffect, useState } from 'react'

const Singleuser = () => {
const [messages,setMessages]=useState([]);
const [error,setError]=useState('')

const FetchMessages=async()=>{
  try {
    const res=await fetch('http://localhost:4000/api/v1/usersmessages',{
      method:"get",
      headers:{
          "Content-Type":"application/json"
      }
  })
  const result=await res.json();
  if(result.success===false){
    setError(result.messages)
  }else{
setMessages(result.messages)
  }
 
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
FetchMessages()
},[])
console.log(messages)
  return (
    <>
    <div className='text-white mt-5'>


{messages.length < 0 ? <h1 className='text-white'>mesages not Found</h1> :

  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Subject</th>
        <th scope="col">MESSAGE</th>
      </tr>
    </thead>

    <tbody>
      {
        messages.map((user, index) => {
          return <>
            <tr className='mt-1' >
              <td className='text-white'>{user.firstname}</td>
              <td className='text-white'>{user.lastname}</td>
              <td className='text-white'>{user.subject}</td>
              <td className='text-white'>{user.message}</td>
            </tr>
          </>
        })
      }

    </tbody>
  </table>

}


</div>
    </>
  )
}

export default Singleuser