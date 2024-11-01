'use client';

// ** Next Imports
import React, { useState, useEffect } from 'react'

// ** MUI imports
import Box from '@mui/material/Box'

// ** Style Imports
import { useTheme } from '@mui/material/styles';

// ** Auth Imports
import { useUser } from '@auth0/nextjs-auth0/client';

// ** Type Imports
import { User } from '@/utils/types';
import { fetchUserInfo } from '@/utils/db';
import NavBar from '@/components/nav/NavBar';

const Page = () => {

  // ** User States
  const {user} = useUser();
  const [userInfo, setUserInfo] = useState<User | null>(null)

  useEffect(() => {

    const fetchUser = async (email: string) =>{
      const data = await fetchUserInfo(email);
      setUserInfo(data)
    }

    if (user?.email) {
      fetchUser(user.email)
    }


  }, [user?.email])

  return (
    userInfo ? 
        <Box className='flex flex-col w-[100vw] h-[100vh]'>
            <NavBar userInfo={userInfo} />
            <Box>{Object.keys(userInfo).toString() +  Object.values(userInfo).toString()}</Box> 
        </Box>
    : 
        <Box>Loading</Box>
  )
}

export default Page