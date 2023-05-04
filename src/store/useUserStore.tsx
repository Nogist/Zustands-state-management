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
    users: User[];
    loading: boolean;
    error: string | null;
    getUsers: () => Promise<void>;
    addUser: (user: User) => Promise<void>;
    deleteUser: (id: number) => Promise<void>;
  };

  export const useUserStore = create<UserState>((set) => ({
    users: [],
    loading: false,
    error: null,

    getUsers: async () => {
      set({ loading: true });

      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        set({ users: response.data, loading: false, error: null });
      } catch (error) {
        set({ loading: false, error: 'Failed to fetch users' });
      }
    },

    addUser: async (user: User) => {
      set({ loading: true });

      try {
        const response = await axios.post<User>('https://jsonplaceholder.typicode.com/users', user);
        set((state) => ({ users: [...state.users, response.data], loading: false, error: null }));
      } catch (error) {
        set({ loading: false, error: 'Failed to add user' });
      }
    },

    deleteUser: async (id: number) => {
      set({ loading: true });

      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
          loading: false,
          error: null,
        }));
      } catch (error) {
        set({ loading: false, error: 'Failed to delete user' });
      }
    },
  }));
