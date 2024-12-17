import React, { useContext, useEffect, useState } from 'react'
import ProfilesCard from './ProfilesCard'
import Grid from "@mui/material/Grid";
import { deleteProfile, getAllProfiles } from './Store/Profiles/Actions';
import { useDispatch, useSelector } from 'react-redux';
import NoPosts from './NoPosts';

const ProfileLists = () => {
  const {profiles} = useSelector((store) => store);
  const [profileList,setProfileList] = useState([])
  const dispatch = useDispatch();
  const {auth} = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const handleDeleteProfile = (id) => { 
    dispatch(deleteProfile(id)); 
    setProfileList((prevProfiles) => 
      prevProfiles.filter((profile) => profile?.id !== id)  
    )}; 

    useEffect(() => { 
         dispatch(getAllProfiles(jwt)) 
    }, [jwt]) 
  
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {profiles.profiles.length === 0 && <NoPosts/>}
    {profiles.profiles.map((profile) => (
      <Grid item key={profile.id} xs={12} sm={6} md={4} lg={3}>
        <ProfilesCard  profile={profile} handleDelete={handleDeleteProfile}/>
      </Grid>
    ))}
  </Grid>
  )
}

export default ProfileLists