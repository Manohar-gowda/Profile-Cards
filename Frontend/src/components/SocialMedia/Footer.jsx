import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1f2937',
        color: 'white',
        py: 4,
        px: 2,
        mt: 'auto',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Section 1 */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are dedicated to creating the best chatting experience. Our goal is to make communication seamless and fun.
          </Typography>
        </Grid>

        {/* Section 2 */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Links
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="hover">
              Home
            </Link>
          </Box>
          <Box>
            <Link href="#" color="inherit" underline="hover">
              Features
            </Link>
          </Box>
          <Box>
            <Link href="#" color="inherit" underline="hover">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Section 3 */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">
            Email: support@chatapp.com
          </Typography>
          <Typography variant="body2">
            Phone: +1 (123) 456-7890
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          pt: 2,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} ChatApp. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
