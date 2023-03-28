import React, { useState } from 'react'

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='bg-blue-50 h-screen flex items-center'>
      <form className='w-64 mx-auto mb-12'>
        <input type="text" value={userName} onChange={ev => setUserName(ev.target.value)} placeholder='Name' className="block w-full rounded-sm p-2 mb-2 border" />
        <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} placeholder='password' className="block w-full rounded-sm p-2 mb-2 border" />
        <button className='bg-blue-500 text-white block w-full rounded-sm p-2'>Register</button>
      </form>
    </div>

  )
}

export default Register
 