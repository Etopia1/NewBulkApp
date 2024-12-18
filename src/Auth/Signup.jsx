import React, { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

import { FiShoppingBag } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
const Signup = ({setLogin, setPopup}) => {
  // const [login, setLogin] = useState(false)
  const [token, setToken]=useState(true)
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [email2, setEmail2]=useState("")
  const [password2, setPassword2]=useState("")
  const dispatch = useDispatch()
  const HandleSubmit = () =>{
    if (!email || !password || !name){
      toast.error("Please Fill All Details")
    } else {
     const url = "http://localhost:1900/api/auth/signup"
     const datas = {name, email, password}
     axios.post(url, datas)
     .then((res)=>{
       console.log(res);
       toast.success(res.data.message)
       // setLogin(true)
       setTimeout(()=>{
         setLogin(false)
       }, 2000)
     })
     .catch((error)=>{
       console.log(error);
     })
    }
  }

  return (
    <>
        <div className="flex items-center justify-between w-[100%] h-[10%] ">
          <div>
            <h1>Sign Up Now</h1>
          </div>
          <div>
            <IoCloseOutline
              className="text-2xl cursor-pointer "
              onClick={() => setPopup(false)}
            />
          </div>
        </div>
        {/* form section */}
        <div className=" w-[100%] h-[80%]  flex gap-[20px] items-center
          justify-center flex-col ">
          <input
            type="text"
            onChange={(e)=> setName(e.target.value)}
            placeholder="User name"
            className=" w-[80%] pl-[10px] rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 h-[15%] "
          />
          <input
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Email"
            className=" w-[80%] pl-[10px]  rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 h-[15%]"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
            className=" w-[80%] pl-[10px]  rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 h-[15%]"
          />
          <div className="flex justify-center">
            <button onClick={HandleSubmit} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
            Sign Up
            </button>
            <Toaster/>

          </div>
        </div>
        <div className=" w-[100%] h-[10%] flex items-center justify-center  ">
          <h3 className="gap-[10px] ">Already have an Account?  <span onClick={() => setLogin(false)} className="text-[#6666d3] ">Login</span></h3>
        </div>
    </>
  );
}

export default Signup;
