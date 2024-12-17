import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteProfile } from "./Store/Profiles/Actions";


const ProfilesCard = ({ profile, handleDelete }) => {
  

  // const colors = [
  //   '#5A30A4', '#0B44ED', '#609B92',
  //   '#1D4BF6', '#8F83DE', '#4A3BAE', '#E76E8B',
  //   '#AC26DF', '#32126F', '#82DACE', '#7BBBB2',
  //   '#171C34', '#C22294', '#3F36BD', '#2660C4',
  //   '#468DC9', '#FFC085', '#90EE08', '#2571C1',
  //   '#A8B9D2', '#23CF35', '#EC7EE5', '#34BE89',
  //   '#E7D1A7', '#87CEC4', '#DC12C0', '#8F6E64',
  //   '#EDC752', '#B3D030', '#2B16DB', '#AD7FD6',
  //   '#D65ABB', '#C67083', '#19CE97', '#6E6CFB',
  //   '#DDBEE2', '#65C326', '#AA2796', '#B74CEA',
  //   '#A4B8A5', '#6A32E2', '#E50416', '#615354',
  //   '#8ECE6D', '#9C7800', '#40BFB9', '#ED1DB7',
  //   '#F6CDCB', '#0E1DA1', '#43B559'
  // ]
  // const randomColor = colors[Math.floor(Math.random() * colors.length)];

//   function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
  
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <div className="flex">
        <Avatar
          alt={profile?.userId}
          src={""}
          sx={{
            width: 100,
            height: 100,
            margin: "0 auto",
            mb: 2,
            boxShadow: 2,
            backgroundColor: profile?.color
          }}
        />
      <DeleteIcon onClick={() => handleDelete(profile?.id)} className="cursor-pointer float-right" style={{color:"red", fontSize: 30}}/>
        </div>
        
        <Typography variant="h5" component="div" gutterBottom>
          {profile?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profile?.email}
        </Typography>
        <Box mt={2} textAlign="left">
          <Typography variant="body1">
            <strong>Gender:</strong> {profile?.gender}
          </Typography>
          <Typography variant="body1">
            <strong>Country:</strong> {profile?.country}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfilesCard;
