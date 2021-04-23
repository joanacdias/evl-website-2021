import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarItem from '../NavbarItem/NavbarItem';
import { ReactComponent as Logo } from '../../assets/icons/everledger-logo.svg';
import  "./Navbar.scss";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid 
                container spacing={2}
                className="navbarContainer"
            >
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar className="navbar">
                            <Grid container spacing={2}>
                                <Grid item xs={3} display="flex" justifyContent="flex-start" alignItems="center">
                                    <Link to={'/'}><Logo fill="#23333F" className="navLogo" /></Link>
                                </Grid>
                                <Grid item xs={9} display="flex" justifyContent="flex-start">
                                    <NavbarItem number="01" path="/about" label="About"/>
                                    <NavbarItem number="02" path="/industry-solutions" label="Industry Solutions"/>
                                    <NavbarItem number="03" path="/our-technologies" label="Our Technologies"/>
                                    <NavbarItem number="02" path="/insights" label="Insights"/>
                                    <NavbarItem number="02" path="/contact" label="Contact"/>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;