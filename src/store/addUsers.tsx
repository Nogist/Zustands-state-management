import { useState } from 'react';
import axios from 'axios';
import create from 'zustand';

type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: {
    city: string;
    zipcode: string;
  };
};

type AddUserState = {
  loading: boolean;
  error: string | null;
  addUser: (user: User) => Promise<void>;
};

export const useAddUserStore = create<AddUserState>((set) => ({
  loading: false,
  error: null,

  addUser: async (user: User) => {
    set({ loading: true });

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
      const newUser = response.data as User;
      set({ loading: false, error: null });
    } catch (error) {
      set({ loading: false, error: 'Failed to add user' });
    }
  },
}));
