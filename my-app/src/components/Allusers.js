import React, { useEffect, useState } from 'react'

const Allusers = () => {
  const [users, setUsers] = useState([])
  const FetchAllUser = async () => {
    const res = await fetch('http://localhost:4000/api/v1/allusers', {
      method: "Get",
      headers: {  "Content-Type": "application/json"  }
    })
    const result = await res.json();
    setUsers(result.allUser)
  }
  useEffect(() => {

    FetchAllUser()
  }, [])

  return (
    <div className='text-white mt-5'>
<h1 className='text-white text-center'> Users Messages</h1>

        {users.length < 0 ? <h1 className='text-white'>No user Registered</h1> :


          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>

            <tbody>
              {
                users.map((user, index) => {
                  return <>
                    <tr className='mt-1' >
                      <td className='text-white'>{user.firstname}</td>
                      <td className='text-white'>{user.lastname}</td>
                      <td className='text-white'>{user.email}</td>
                    </tr>
                  </>
                })
              }

            </tbody>
          </table>
         
        }
      

    </div>
  )
}

export default Allusers