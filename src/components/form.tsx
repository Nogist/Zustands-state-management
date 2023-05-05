import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useUserStore } from '../store/useUserStore';
import {AiOutlineCloseCircle} from 'react-icons/ai';

interface Props {
  onCancel: () => void;
}

interface FormValues {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  zipcode: string;
}

const Form: React.FC<Props> = ({ onCancel }) => {
  const [values, setValues] = useState<FormValues>({
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    zipcode: '',
  });
  const [highestId, setHighestId] = useState<number>(0);
  const { users, addUser } = useUserStore();

  useEffect(() => {
    // Find the maximum ID of the existing users in the table
    const maxId = Math.max(...users.map((user) => user.id));
    setHighestId(maxId);
  }, [users]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, phone, address, zipcode } = values;
    const newUser = {
      id: highestId + 1,
      name,
      email,
      phone,
      address: {
        city: address,
        zipcode,
      },
    };
    
    console.log('New User:', newUser);
    addUser(newUser);
    setValues({
      id: 0,
      name: '',
      email: '',
      phone: '',
      address: '',
      zipcode: '',
    });
    setHighestId(highestId + 1);
    onCancel();
  };

  return (
    <form className='w-4/12 bg-white px-20 py-14 relative' onSubmit={handleSubmit}>
      <div className='flex' >
        <TextField
        id='name'
        name='name'
        label='Name'
        variant='outlined'
        className='w-full'
        value={values.name}
        onChange={handleChange}
      />
      <p className='absolute right-4 top-2 text-[30px] cursor-pointer'
       onClick={onCancel}>
        <AiOutlineCloseCircle />
      </p>
      </div>
      <div className='py-6'>
        <TextField
          id='email'
          name='email'
          label='Email Address'
          variant='outlined'
          className='w-full'
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <TextField
        id='phone'
        name='phone'
        label='Phone number'
        variant='outlined'
        className='w-full'
        value={values.phone}
        onChange={handleChange}
      />
      <div className='py-6'>
        <TextField
          id='address'
          name='address'
          label='Address'
          variant='outlined'
          className='w-full'
          value={values.address}
          onChange={handleChange}
        />
      </div>
      <TextField
        id='zipcode'
        name='zipcode'
        label='Zipcode'
        variant='outlined'
        className='w-full'
        value={values.zipcode}
        onChange={handleChange}
      />
      <div className='py-6'>
        <Button type='submit' variant='contained' className='w-full'>
          Add user
        </Button>
      </div>
    </form>
  );
};

export default Form;
