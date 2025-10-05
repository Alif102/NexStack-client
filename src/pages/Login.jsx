import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';
import fetchUserDetails from '../utils/fetchUserDetails';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/userSlice';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const valideValue = Object.values(data).every(el => el)


    const handleSubmit = async(e)=>{
        e.preventDefault()

        try {
            const response = await Axios({
                ...SummaryApi.login,
                data : data
            })
            
            if(response.data.error){
                toast.error(response.data.message)
            }

            if(response.data.success){
                toast.success(response.data.message)
                localStorage.setItem('accesstoken',response.data.data.accesstoken)
                localStorage.setItem('refreshToken',response.data.data.refreshToken)

                const userDetails = await fetchUserDetails()
                dispatch(setUserDetails(userDetails.data))

                setData({
                    email : "",
                    password : "",
                })
                navigate("/")
            }

        } catch (error) {
            AxiosToastError(error)
        }



    }
    return (
       <section className='w-full container mx-auto px-2'>
  <div className='bg-white my-8 w-full max-w-5xl mx-auto rounded-lg p-6 md:p-10 grid md:grid-cols-2 gap-8'>

    {/* === Login Form === */}
    <div>
      <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>Login</h2>
      <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
        <div className='grid gap-1'>
          <label htmlFor='email'>Email :</label>
          <input
            type='email'
            id='email'
            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
            name='email'
            value={data.email}
            onChange={handleChange}
            placeholder='Enter your email'
          />
        </div>

        <div className='grid gap-1'>
          <label htmlFor='password'>Password :</label>
          <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
            <input
              type={showPassword ? "text" : "password"}
              id='password'
              className='w-full outline-none'
              name='password'
              value={data.password}
              onChange={handleChange}
              placeholder='Enter your password'
            />
            <div onClick={() => setShowPassword(preve => !preve)} className='cursor-pointer'>
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <Link to={"/forgot-password"} className='block ml-auto hover:text-primary-200'>
            Forgot password ?
          </Link>
        </div>

        <button
          disabled={!valideValue}
          className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"} text-white py-2 rounded font-semibold my-3 tracking-wide`}
        >
          Login
        </button>
      </form>

      <p className='text-center md:text-left'>
        Don't have an account?{" "}
        <Link to={"/register"} className='font-semibold text-green-700 hover:text-green-800'>
          Register
        </Link>
      </p>
    </div>

    {/* === Test Login Info (Side Panel) === */}
    <div className='bg-gray-50 border rounded p-6 flex flex-col justify-center'>
      <h3 className='font-semibold mb-3 text-gray-700 text-lg'>Test Login Information</h3>

      <div className='space-y-4 text-sm'>
        <div className='bg-white p-3 rounded border'>
          <p className='font-medium text-green-700'>Admin</p>
          <p>Email: <span className='font-mono text-gray-700'>alifahmed102@gmail.com</span></p>
          <p>Password: <span className='font-mono text-gray-700'>admin123</span></p>
        </div>

        <div className='bg-white p-3 rounded border'>
          <p className='font-medium text-green-700'>User</p>
          <p>Email: <span className='font-mono text-gray-700'>user1@gmail.com</span></p>
          <p>Password: <span className='font-mono text-gray-700'>123456</span></p>
        </div>
      </div>
    </div>

  </div>
</section>

    )
}

export default Login

