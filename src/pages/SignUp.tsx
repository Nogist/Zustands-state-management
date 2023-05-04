import React from 'react';
import Modal from '../components/Modal';
import Banner from '../Assets/Banner.png'

const SignUp: React.FC = () => {
  return (
    <div className='h-screen flex flex-row-reverse'>
      <Modal
        text='dd'
        text3='f'
        link2
        signup
        login
      />
      <div className='bg-yellow flex-1'>
        <div className="h-screen">
          <img src={Banner} alt="banner" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default SignUp
