import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link, NavLink } from 'react-router-dom';
import "../../styles/Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Block } from '@mui/icons-material';

const Header = () => {
    const [mOpen, setMOpen] = useState(false)

    // Handle menu drawer

    const handleDrawer = () => {
        setMOpen(!mOpen)
    }
 
    // Menu drawer

    const drawer = (
        <Box onClick= {handleDrawer} sx={{textAlign: 'center', }}>
                    <ul id='nav-mob-items'>
                        <li>
                            <NavLink activeClassName= "active" to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/menu"}>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
        </Box>
    )
  return (
    <Box sx={{height: "10vh"}}>
        <AppBar component={'nav'} sx={{bgcolor: '#1A1A1D'}  }>
            <Toolbar>
                <Typography className='nav' component="div" sx={{flexGrow: 1, cursor: "pointer", fontWeight: '900', fontSize: '1.2rem',}}>
                 <RestaurantIcon/>
                  AtithiCafe
                </Typography>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    <ul id='nav-items'>
                        <li>
                            <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/menu"}>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
                </Box>
                <IconButton id='icon-button' color='inherit' aria-label='open drawer' edge='end' sx={{mr: 3, }} onClick={handleDrawer}>
                    <MenuIcon id='MenuIcon' />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant='temporary' open= {mOpen} onClose={handleDrawer} sx={{display: {xs: "block", sm: "block"}}}>
                {drawer}
            </Drawer>
        </Box>
        <Box sx={{p: 1}}>
         <Toolbar/>
        </Box>
    </Box>
  )
}

export default Header
