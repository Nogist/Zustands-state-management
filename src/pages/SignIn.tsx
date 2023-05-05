import React from 'react';
import Modal from '../components/Modal';
import Banner from '../Assets/Banner.png'

const SignIn: React.FC = () => {

  return (
    <div className='h-screen flex flex-row'>
      <Modal 
        text1='f'
        signin
        text2='f'
        forgot
        login2
        link  
      />
      <div className='bg-yellow flex-1'>
        <div className="h-screen">
          <img src={Banner} alt="banner" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default SignIn
