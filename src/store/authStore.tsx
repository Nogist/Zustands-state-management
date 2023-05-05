import axios from 'axios';
import create from 'zustand';

type User = {
  email: string;
  password: string;
};

type AuthState = {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  login: (user: User) => Promise<void>;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,
  isLoading: false,

  login: async (user: User) => {
    set({ isLoading: true });

    try {
      const response = await axios.post('http://localhost:5000/login', user);
      const userData = response.data;
      set({ user: userData, isLoading: false, error: null });
    } catch (error) {
      set({ error: 'Failed to login', isLoading: false });
    }
  },

  logout: () => {
    set({ user: null });
  },
}));

export default useAuthStore;
