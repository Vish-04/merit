'use client'

import { useUser } from '@auth0/nextjs-auth0/client';

import {useEffect} from 'react'

const StateLayer = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();

    useEffect(() => {
        if (window) {
            const handleBeforeUnload = async () => {
                localStorage.clear();
                sessionStorage.clear();
            };

            window.addEventListener('beforeunload', handleBeforeUnload);

            return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        }
    }, [user?.email]);
    
  return (
    <>
        {children}
    </>
  )
}

export default StateLayer