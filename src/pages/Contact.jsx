import React from 'react'
import Layout from '../components/layouts/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import '../styles/Contact.css'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my: 10,display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-between", "& h2": {
        fontSize: "3rem",
        fontWeight:"900",
        mb: "2rem",
      },}}>
        <Typography variant="h2">
            Contact US
        </Typography>
        <Box>
            <TableContainer component={Paper}>
                <Table aria-label='Contact table'>
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{bgcolor: "beige", p: 1, textAlign: "center"}}>
                                Contact Details
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <SupportAgentIcon sx={{color: "black", p: "1px",fontSize: "2rem", mb: "-9px" }}/> 12384738290(toll free)
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <EmailIcon sx={{color: "grey", p: "1px",fontSize: "2rem", mb: "-9px" }}/> atithicafe@gmail.com
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        <form typeof='submit'>
            <h5>
                reviews 
            </h5>
            <input type="text" />
            <button>Submit</button>
        </form>
      </Box>
    </Layout>
  )
}

export default Contact
