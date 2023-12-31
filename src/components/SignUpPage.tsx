"use client"
import Navbar from '@/components/Navbar';
import React,{useState} from 'react'
const SignUpPage = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email:"",
        password: ""
      })
    
      const {name, email, password} = userInfo;
    
      const handleChane = ({target}:any)=>{
        const {name, value} = target
    
        setUserInfo({...userInfo ,[name]:value})
      }
    
    
      const handleSubmit = async(e:any) =>{
        e.preventDefault()
        const res = await fetch("/auth/users",{
          method: "POST",
          body: JSON.stringify(userInfo)
        }).then((res)=>res.json())
        console.log(res);
        
      }
  return (
    <div>
    <div className='border border-black h-96 flex flex-col items-center justify-center'>
    <form onSubmit={handleSubmit}>
      
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
<div className="relative mb-6">
<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
  </svg>
</div>
<input type="text" name='email' value={email} onChange={handleChane}  id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
</div>

<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
<div className="flex">
<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg>
</span>
<input type="text" name='name' value={name} onChange={handleChane} id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk"/>
</div>

<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
<div className="flex">
<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
  {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  fill="currentColor" viewBox="0 0 20 20"> */}
      {/* <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg> */}
</span>
<input type="text"  name='password' value={password} onChange={handleChane} id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk"/>
</div>

      {/* <input placeholder='Enter Name...' type="text" name='name' value={name} onChange={handleChane} />
      <input placeholder='Enter Email...' type="email" name='email' value={email} onChange={handleChane} /> <br />
      <input placeholder='Enter Password...' type="password" name='password' value={password} onChange={handleChane} /> <br /> */}
      <button type='submit'>Click</button>
    </form>
    </div>
  </div>
  )
}

export default SignUpPage