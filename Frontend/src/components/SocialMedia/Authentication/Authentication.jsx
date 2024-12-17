import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Grid2, Button } from '@mui/material'
import AuthModal from './AuthModal';


const Authentication = () => {

    const [openAuthModal, setOpenAuthModal] = useState(false);
    const handleOpenAuthModal = () => setOpenAuthModal(true);
    const handleCloseAuthModal = () => setOpenAuthModal(false);

  return (
    <div className="flex justify-center items-center text-center">
        <div className="justify-center items-center w-[60%] space-y-10 m-[5%] p-[5%] border border-solid border-b-gray-950 shadow rounded">
            <h1 className="font-bold text-3xl text-center">
                Create Featured Profiles
            </h1>
            <Button varient="content" size="large" 
            fullWidth   
            onClick={handleOpenAuthModal} 
            sx={{
                borderRadius:"29px",
                py:"7px",
                bgcolor:"#2e2e2d",
                color:"white"
            }}
            >
                Register
                </Button>
            <p className="text-sm mt-2 text-center">By signing up. you agree to the Terms of service and Privacy Policy, including Cookie Use.</p>

            <div className="mt-10">
                <h1 className="fonr-bold text-xl mb-5">Already have Account?</h1>
                <Button variant="outlined"
                fullWidth
                onClick={handleOpenAuthModal}
                sx={{
                    borderRadius:"29px",
                    py: "7px",
                    borderColor: "#2e2e2d",
                    color: "#2e2e2d",
                    '&:hover': {bgcolor: "#2e2e2d", color: "white"}
                }}
                >
                    Login
                </Button>

            </div>
        </div>
        <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal}/>
    </div>
  )
}

export default Authentication