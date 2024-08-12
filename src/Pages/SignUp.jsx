import React, { useContext, useRef, useState } from 'react';
import hotelImg from '../assets/About/10.jpg'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { UserContext } from '../AuthProvider/AuthContext';
import { updateProfile } from 'firebase/auth';
import useSecureAxios from '../Hooks/useSecureAxios';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser , LogOut} = useContext(UserContext);
    const secureAxios = useSecureAxios();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');

        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password)) {
            Swal.fire({
                title: "Password Error",
                text: "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.",
                icon: "error"
            });
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result?.user;
                const userInfo = {
                    name: name,
                    email: user.email,
                    password:  password
                }
                updateProfile(user, {
                    displayName: name,
                }).then(() => {
                    
                    secureAxios.post('/users',userInfo)
                    .then(res=>{
                        console.log(res.data);
                        if(res.data.insertedId){
                            LogOut()
                            .then(()=>{
                                Swal.fire({
                                    title: "Registration Successful",
                                    text: "You have successfully registered. You can now log in.",
                                    icon: "success"
                                });
                                form.reset();
                                navigate('/login')
                            })
                        }
                        
                    })
                    
                })
                

            })
            .catch(err => {
                Swal.fire({
                    title: "Registration Failed",
                    text: "Failed to register. Please try again.",
                    icon: "error"
                });
            });

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
                        <h1 className='primary-font text-3xl'>Please SignUp</h1>
                    </div>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="Name*" name='name' className=" py-3 px-5 border rounded-md outline-none" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Email*" name='email' className="py-3 px-5 border rounded-md outline-none" required />
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

                        <div className=''>
                            <Link className="label-text-alt link link-hover" to={"/login"}>Already have an account? <span>LogIn</span></Link>
                        </div>


                        <div className="form-control mt-6">
                            <input type="submit" value="SignUp" className="text-black tracking-wider py-3 rounded cursor-pointer bg-orange-300 font-semibold w-full" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;