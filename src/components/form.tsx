import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useUserStore } from '../store/useUserStore';
import { v4 as uuidv4 } from 'uuid';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipcode: string;
}

const Form: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipcode: '',
  });
  const { addUser } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, phone, address, zipcode } = values;
    const newUser = {
      id: uuidv4(),
      name,
      email,
      phone,
      address: {
        city: address,
        zipcode,
      },
    };
    addUser(newUser);
    setValues({
      name: '',
      email: '',
      phone: '',
      address: '',
      zipcode: '',
    });
  };

  return (
    <form className='w-4/12 bg-white px-20 py-14' onSubmit={handleSubmit}>
      <TextField
        id='name'
        name='name'
        label='Name'
        variant='outlined'
        className='w-full'
        value={values.name}
        onChange={handleChange}
      />
      <p className='py-6'>
        <TextField
          id='email'
          name='email'
          label='Email Address'
          variant='outlined'
          className='w-full'
          value={values.email}
          onChange={handleChange}
        />
      </p>
      <TextField
        id='phone'
        name='phone'
        label='Phone number'
        variant='outlined'
        className='w-full'
        value={values.phone}
        onChange={handleChange}
      />
      <p className='py-6'>
        <TextField
          id='address'
          name='address'
          label='Address'
          variant='outlined'
          className='w-full'
          value={values.address}
          onChange={handleChange}
        />
      </p>
      <TextField
        id='zipcode'
        name='zipcode'
        label='Zipcode'
        variant='outlined'
        className='w-full'
        value={values.zipcode}
        onChange={handleChange}
      />
      <p className='py-6'>
        <Button type='submit' variant='contained' className='w-full'>
          Add user
        </Button>
      </p>
    </form>
  );
};

export default Form;
