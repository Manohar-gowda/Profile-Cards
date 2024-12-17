import React, { useEffect, useReducer, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CreatePost from './CreatePost'
import ProfileLists from './ProfileLists'
import { Drawer} from '@mui/material';

import { useSelector } from 'react-redux'

const HomePage = () => {
  const {auth} = useSelector((store) => store)

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

    const [selectedTab, setSelectedTab] = useState("home");
    
  return (
   
      <div className="flex flex-col h-screen overflow-scroll">
        <Navbar handleMenu={toggleDrawer(true)}/>
        <div>

      {/* Left Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: 250 , height:710, backgroundColor: "#1f2937"}}
        >
          <div className="p-4  text-white">
        <div className="p-4 flex items-center space-x-3 border-b border-gray-600">
          <div className="h-10 w-10 bg-gray-700 rounded-full text-center">
            <h1 className="text-center p-2 font-bold">M</h1>
          </div>
          <span className="text-lg font-bold">{auth.user?.name}</span>
        </div>
        <ul className="mt-4 space-y-2">
          <li onClick={() => {
            setSelectedTab("home");
          }} className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200">
            Home
          </li>
          <li onClick={() => {
            setSelectedTab("create");
          }}
            className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200">
            Create Profile
          </li>
        </ul>
      </div>
        </div>
      </Drawer>
    </div>
        <div>
        <div className="flex-grow p-4 bg-gray-100">
          {selectedTab === 'home' ? <ProfileLists/> : <CreatePost/>}
        </div>
        
        </div>
        <Footer/>
    </div>
   
  )
}

export default HomePage