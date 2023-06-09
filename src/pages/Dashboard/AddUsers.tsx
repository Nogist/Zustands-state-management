import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Form from '../../components/form'


const AddUsers:React.FC = () => {
  
  const [formModal, setFormModal]= useState(false);
  const popModal = () => {
    setFormModal(true);
  }
  const closeModal = () => {
    setFormModal(false);
  };
  return (
    <div className='w-full flex flex-col items-end '>
      <Button variant="outlined"
        onClick={popModal}>
          Add Users
      </Button>
      {formModal && (
        <div className='absolute w-full h-screen flex flex-col bg-black bg-opacity-50 justify-center items-center'>
         <Form onCancel={closeModal} />
        </div>
      )}
    </div>
  )
}

export default AddUsers 
