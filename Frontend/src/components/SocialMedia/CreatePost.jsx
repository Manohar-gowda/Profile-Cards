import React, { useContext, useState } from "react";
import Alert from '@mui/material/Alert';

import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { createProfile} from "./Store/Profiles/Actions";
import { useDispatch, useSelector } from "react-redux";


const CreatePost = () => {

  const [successMsg, setSuccessMsg] = useState(false);
  const dispatch = useDispatch();
  const {auth} = useSelector((store) => store);
  

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  const [formData, setFormData] = useState({ 
    name: "",
    email: "",
    gender: "",
    agreeToTerms: false,
    color: getRandomColor()
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProfile(formData));
    setFormData({
    name: "",
    email: "",
    gender: "",
    agreeToTerms: false,
    })
    setSuccessMsg(true)
    setTimeout(() => {
      setSuccessMsg(false)
    }, 3000);
  };

  return (
    <div>
      {successMsg && <Alert sx={{
        fontSize: '15px',
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: '#6ff292',
        padding: 'p-4',
      }}
      >
        Profile Added Successfully.</Alert>}
      
       <div className="flex justify-center items-center h-screen">
      <div className="justify-center items-center w-[50%] space-y-10 m-[5%] p-[5%] border border-solid border-b-gray-950 shadow rounded">
        <h1 className="text-3xl font-bold">Create Profils</h1>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl margin="normal" component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio color="#1f2937"/>} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio color="#1f2937" />}
                label="Female"
                color="#1f2937"
              />
              <FormControlLabel
                value="other"
                control={<Radio color="#1f2937"/>}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="select-label">Country</InputLabel>
            <Select
              labelId="select-label"
              name="country"
              value={formData.country || ""}
              onChange={handleChange}
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="China">China</MenuItem>
              <MenuItem value="Russia">Russia</MenuItem>
            </Select>
          </FormControl>

          <FormControl margin="normal">
            <FormControlLabel
              control={
                <Checkbox
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  color="#1f2937"
                />
              }
              label="I agree to the terms and conditions"
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ marginTop: "1rem", backgroundColor: "#1f2937" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
    </div>
   
  );
};

export default CreatePost;
