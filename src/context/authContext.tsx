"use client"
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { UserPayload as User } from '@/types/User';
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  loading: boolean;
  refreshUser: () => void;
}


// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, setUser, clearUser, isAuthenticated } = useAuthStore();
  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter();
  // Authentication logic for login
  const login = () => {
        fetchUser();
        if(user){
          router.push('/');
        }
  };

  const fetchUser = async () => {
    
    try {
      setLoading(true)
      const result = await axios.get(`/api/user`, {
        withCredentials: true,
      });
  
      if (result.status === 200) {
        setUser(result.data.user)
      }
    } catch (error) {
      // Handle error
      clearUser();
    }
    finally{
      setLoading(false);
    }
  };

  const logout = async () => {
    try{
      setLoading(true);
      const result = await axios.post(`/api/logout`, {}, {
        withCredentials: true,
      });
      if (result.status === 200) {
        router.push('/login');
      }
    }
    catch(error){
      // Handle error
      clearUser();
    }
    finally{
      clearUser();
      setLoading(false);
    }
  };

  const refreshUser = async () => {
    try{
      setLoading(true);
      await fetchUser();
    }
    catch(error){
      // Handle error
      clearUser();
    } 
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser()
  }, []);
  
  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated,
    loading,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

// Hook to use the Auth context in components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

