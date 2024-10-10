'use client';

import { useRouter } from 'next/navigation';
import { createContext, useEffect, useContext, useReducer } from 'react';
import toast from 'react-hot-toast';
import { getUserApi, signupApi, signinApi } from '@/services/authSrvice';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'signin':
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case 'signup':
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case 'user/loaded':
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    //case 'logout':
    //  return {
    //    user: null,
    //    isAuthenticated: false,
    //  };
    default:
      throw new Error('Unknown action!');
  }
}

export default function AuthProvider({ children }) {
  const router = useRouter();
  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  async function signin(values) {
    dispatch({ type: 'loading' });
    try {
      const {
        data: { message, user },
      } = await signinApi(values);
      dispatch({ type: 'signin', payload: user });
      toast.success(message);
      router.push('/profile');
    } catch (err) {
      const error = err?.response?.data?.message || 'An error occurred';
      dispatch({ type: 'rejected', payload: error });
      toast.error(error);
    }
  }

  async function signup(values) {
    dispatch({ type: 'loading' });
    try {
      const {
        data: { message, user },
      } = await signupApi(values);
      dispatch({ type: 'signup', payload: user });
      toast.success(message);
      router.push('/profile');
    } catch (err) {
      const error = err?.response?.data?.message || 'An error occurred';
      dispatch({ type: 'rejected', payload: error });
      toast.error(error);
    }
  }

  async function getUser() {
    dispatch({ type: 'loading' });
    try {
      const {
        data: { user },
      } = await getUserApi();
      dispatch({ type: 'user/loaded', payload: user });
    } catch (err) {
      const error = err?.response?.data?.message || 'Failed to load user data';
      dispatch({ type: 'rejected', payload: error });
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        signin,
        signup,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Auth context not found');
  return context;
}
