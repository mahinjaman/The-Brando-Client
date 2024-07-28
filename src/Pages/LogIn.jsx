import React, { useContext, useRef, useState } from 'react';
import hotelImg from '../assets/About/10.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { UserContext } from '../AuthProvider/AuthContext';
const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const emailRef = useRef();
    const { logIn , loginWithGoogle, loginWithGithub} = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const email = emailRef?.current?.value
        const password = data.get('password');

        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password)) {
            Swal.fire({
                title: "Password Error",
                text: "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.",
                icon: "error"
            });
            return;
        }

        logIn(email, password)
            .then(result => {
                Swal.fire({
                    title: "Logged In",
                    text: "Welcome!",
                    icon: "success"
                });
                form.reset();
                navigate(location.state ? location.state : '/')
            })
            .catch(err => {
                Swal.fire({
                    title: "Error",
                    text: "Invalid email or password",
                    icon: "error"
                });
            })

    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(res=>{
            Swal.fire({
                title: 'Logged In',
                text: 'Successfully logged in with Google!',
                icon:'success',
                confirmButtonText: 'Okay'
            });
            navigate(location.state ? location.state : '/')
        })
        .catch(err=>{
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong',
                icon:'error',

            });
        })
    }
    const handleGithubLogin = () => {
        loginWithGithub()
        .then(res=>{
            Swal.fire({
                title: 'Logged In',
                text: 'Successfully logged in with Google!',
                icon:'success',
                confirmButtonText: 'Okay'
            });
            navigate(location.state ? location.state : '/')
        })
        .catch(err=>{
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong',
                icon:'error',

            });
        })
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
                                <input type={`${showPassword ? "text" : "password"}`} placeholder="password" name='password' className="py-3 px-5 border rounded-md outline-none w-full" required />

                                <span className='absolute top-4 right-5' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}   </span>
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
                    <div className='flex flex-col items-center gap-3 mb-5'>
                            <h1 className='font-semibold text-xl'>Or</h1>
                            <div className='flex gap-3 '>
                                <button onClick={handleGoogleLogin} className='p-2 rounded-full bg-slate-200 text-2xl'><FaGoogle /></button>
                                <button onClick={handleGithubLogin} className='p-2 rounded-full bg-slate-200 text-2xl'><FaGithub /></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;