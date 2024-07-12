import React, { useRef, useState } from 'react';
import hotelImg from '../assets/About/10.jpg'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
const LogIn = () => {
    const [ showPassword, setShowPassword ] = useState(false)
    const emailRef = useRef();
    const email = emailRef.current
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const password = data.get('password');

        if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password)){
            Swal.fire({
                title: "Password Error",
                text: "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.",
                icon: "error"
              });
            return;
        }

        
        
        console.log(name, email, password);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2">

                {/* image */}
                <div className="w-full h-full rounded-md overflow-hidden">
                    <img src={hotelImg} alt="" className='w-full h-full' />
                </div>

                {/* form */}
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className='text-center pt-10'>
                        <h1 className='primary-font text-3xl'>Please LogIn</h1>
                    </div>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Email*" ref={emailRef} className="py-3 px-5 border rounded-md outline-none" required />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>

                            <div className='relative w-full'>
                            <input type={`${showPassword ? "text" : "password"}`}  placeholder="password" name='password' className="py-3 px-5 border rounded-md outline-none w-full" required />
                            
                            <span className='absolute top-4 right-5' onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}   </span>
                            </div>
                        </div>

                        <div className='flex justify-between flex-wrap'>
                            <button className="label-text-alt link link-hover">Forgot password?</button>
                            <Link className="label-text-alt link link-hover" to={"/signup"}>Don't have an account? <span>SignUp</span></Link>
                        </div>


                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="text-black tracking-wider py-3 rounded cursor-pointer bg-orange-300 font-semibold w-full" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;