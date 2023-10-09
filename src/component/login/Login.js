import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../Router/hook/useTitle';
import useToken from '../../Router/useToken';
import Button from '../shared/Button/Button';
import Social from './Social';

const Login = () => {

    useTitle('login page')

  const { register, formState: { errors }, handleSubmit } = useForm();
  const { Login,setLoading } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const [loginUser, setLoginUser] = useState('');

  const [token] = useToken(loginUser);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
//   if (token) {
//       ;

//   }



  const handleLogin = data => {
    console.log(data);
    setLoginError('');
    Login(data.email, data.password)
        .then(result => {
            const user = result.user;
            const currentUser = {
                email: user?.email

            }
                
                 // get jwts

            fetch(' https://server-side-weld.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                    
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // local storage is the easiest but not the best place to store jwt token
                localStorage.setItem('bookstore-token', data.token);
                toast.success('successfully login.')

                navigate(from, { replace: true });
                setLoading(false)

              
            });

    
        

        })



           


        .catch(error => {
            console.log(error.message)
            setLoginError(error.message);
        });
}





  return (
    <div className="hero " style={{ backgroundImage: `url("https://th.bing.com/th/id/OIP.l7UtqpAoSasZ9777hHlp6QHaE8?pid=ImgDet&rs=1")` }}>
       <div className='my-8 hero-overlay bg-opacity-60 flex justify-center items-center'>
    <div className='w-full sm:w-96 p-7 border border-[#f1592b] rounded-[35px]'>
        <h2 className='text-3xl text-center font-bold  text-[#f1592b] '>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full ">
                <label className="label"> <span className="label-text text-white">Email</span></label>
                <input type="text"
                    {...register("email", {
                        required: "Email Address is required"
                    })}
                    className="input input-bordered w-full" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control my-2 w-full">
                <label className="label"> <span className="label-text text-white">Password</span></label>
                <input type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                    })}
                    className="input input-bordered w-full " />
                <label className="label"> <span className="label-text text-white">Forget Password?</span></label>
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div>
           <div className="flex justify-center items-center w-[100%] text-center"> <button className='text-white font-semibold text-[14px] font-lato py-2 px-10 bg-[#f1592b]'>Login</button></div>
            <div className='my-6'>
                {loginError && <p className='text-red-600'>{loginError}</p>}
            </div>
        </form>
        <p className=' text-white font-popping'>New to Bookstore Portal <Link className='text-[#f1592b] font-semibold' to="/register">Create new Account</Link></p>
                  <div className="divider">OR</div>
                  <Social></Social>
    </div>
</div>
   </div>
  )
}

export default Login