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

type UserState = {
  loading: boolean;
  error: string | null;
  deleteUser: (id: number) => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
  loading: false,
  error: null,

  deleteUser: async (id: number) => {
    set({ loading: true });

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      set({ loading: false, error: null });
    } catch (error) {
      set({ loading: false, error: 'Failed to delete user' });
    }
  },
}));
