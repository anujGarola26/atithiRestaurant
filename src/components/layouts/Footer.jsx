import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <>
        <Box  sx={{textAlign: 'center', bgcolor: '#3C3D37', color: 'azure', p: 2,}}>
            <Box sx={{my: 1, "& svg": {
                fontSize: "2.4rem",
                mx: "20px",
                cursor: "pointer"
            },
            "& svg:hover": {
                color:"black",
                transform: "translateY(-3px)",
                transition: "all 400ms",
            }}}>
                {/* icons */}
                <InstagramIcon/>
                <WhatsAppIcon/>
                <TwitterIcon/>
            </Box>
            <Typography variant='h5' sx={{"@media (max-width : 600px)": {fontSize: "1rem"}, }}>
                All Rights Reserved &copy; yourFirstCode
            </Typography>
        </Box>
    </>
  )
}

export default Footer
