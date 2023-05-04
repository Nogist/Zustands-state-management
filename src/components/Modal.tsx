import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { FcGoogle } from 'react-icons/fc';

interface ModalProps {
  text?:string;
  text1?: string;
  text2?: string;
  text3?: string;
  signin?: boolean;
  signup?: boolean;
  forgot?: boolean;
  link?: boolean;
  link2?:boolean;
  login?:boolean;
  login2?:boolean;

}

const Modal:React.FC<ModalProps> = (props) => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <form className='w-5/12 flex flex-col items-center justify-center'>
      <div className='w-[65.43%] flex flex-col items-center text-center'>
        {props.text && <h3 className='text-center'>Join Us</h3>}
        {props.text1 && <h3 className='text-center'>Welcome Back</h3>}
        {props.signin && <div  className='py-9 w-full'>
          <Button variant="outlined" className='w-full'> <FcGoogle /> Sign in with Google</Button>
        </div>}
        {props.signup && <div  className='py-9 w-full'>
          <Button variant="outlined" className='w-full'> <FcGoogle /> Sign up with Google</Button>
        </div>}
        {props.text2 && <p>Sign In with your Email</p>}
        {props.text3 && <p>Sign Up with your Email</p>}
        <div className='py-9 w-full'>
          <p className='mb-6'><TextField id="outlined-basic" type='email' error  helperText="Incorrect entry." required label="Email Address" variant="outlined" className='w-full'/></p>
          <TextField id="outlined-basic" label="Password"   helperText="Incorrect entry." required variant="outlined"  className='w-full'/>
          {props.forgot && <div className='flex justify-between pt-6 items-center'>
            <span className='flex items-center'>
              <Checkbox {...label} />
              <p>Keep me logged in</p>
            </span>
            <p>Forgot Password</p>
          </div>}
          {props.login2 && <p className='mt-8'><Button type='submit' variant="contained" className='w-full'>Login</Button></p>}
          {props.login && <p className='mt-8'><Button type='submit' variant="contained" className='w-full'>Sign Up</Button></p>}
        </div>
        {props.link && <div className='w-full flex items-start pr-3.5 '>
          <p>Don't have an Account</p>
          <p className='ml-3.5'>Register</p>
        </div>}
        {props.link2 && <div className='w-full flex items-start pr-3.5 '>
          <p>Already have an Account</p>
          <p className='ml-3.5'>Signin</p>
        </div>}
      </div>
    </form>
  )
}

export default Modal
