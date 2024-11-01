// ** Next Imports
import React from 'react'

// ** MUI Components
import Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

// ** Style imports
import { useTheme } from '@mui/material/styles';

// ** Type Imports
import { User } from '@/utils/types';

// ** Utils
import { getInitials } from '@/utils/utils';

type NavBarProps = {
    userInfo: User
}

const NavBar = ({userInfo}: NavBarProps) => {

    const theme = useTheme();
    return (
        <Box className= {`w-full flex items-end px-8 py-4 justify-between h-20  bg-[${theme.palette.secondary.main}]`}>
            <Typography variant='h3' color='white'>Merit.</Typography>
            <Box className='flex gap-4 items-center'>
                <Typography variant='h5' color='white' className='cursor-pointer hover:text-emerald-600 transition-all ease-in-out duration-300'>Browse</Typography>
                <Typography variant='h5' color='white' className='cursor-pointer hover:text-emerald-600 transition-all ease-in-out duration-300'>Saved</Typography>
                <Typography variant='h5' color='white' className='cursor-pointer hover:text-emerald-600 transition-all ease-in-out duration-300'>Generated</Typography>
                <Box 
                    className="w-[45px] h-[45px] ml-5 rounded-full flex items-center justify-center bg-gradient-to-r from-emerald-500  to-emerald-400 hover:outline hover:outline-3 hover:outline-amber-300 transition-all duration-300 cursor-pointer relative"
                    // onClick={handleProfileClick}
                >
                    <Tooltip title={userInfo?.name || 'Guest User'} placement="right">            
                        <Typography variant='h6' className="text-white text-2xl font-normal">
                            {getInitials(userInfo?.name || 'Guest User')}
                        </Typography> 
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default NavBar
