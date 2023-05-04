import create from 'zustand';

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type ValidationState = {
  currentUser: User | null;
  isAuthenticated: boolean;
  signUp: (user: User) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  error: string | null;
};

export const useValidation = create<ValidationState>((set) => ({
  currentUser: null,
  isAuthenticated: false,
  error: null,

  signUp: async (user: User) => {
    try {
      // Perform validation logic here
      // ...

      // Simulate successful signup
      set({ currentUser: user, isAuthenticated: true, error: null });
    } catch (error) {
      set({ error: 'Failed to sign up' });
    }
  },

  signIn: async (email: string, password: string) => {
    try {
      // Perform validation logic here
      // ...

      // Simulate successful signin
      const user = { id: 1, name: 'John Doe', email: email, password: password };
      set({ currentUser: user, isAuthenticated: true, error: null });
    } catch (error) {
      set({ error: 'Failed to sign in' });
    }
  },

  signOut: () => {
    set({ currentUser: null, isAuthenticated: false, error: null });
  },
}));
