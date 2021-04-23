import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Logo } from '../../assets/icons/everledger-logo.svg';
import  "./NavbarItem.scss";

const NavbarItem = ({
    number,
    path,
    label,
}) => {
    return (
        <Grid 
            container
            spacing={2}
            item
            direction="column"
            className="navbarItemContainer"
        >
            <Grid 
                item 
                display="flex" 
                justifyContent="flex-start" 
                classes={{
                    root: "number",
                }}
            >
                <p>{number}.</p>
            </Grid>
            <Grid 
                item 
                display="flex" 
                justifyContent="flex-start" 
                classes={{
                    root: "label",
                }}
            >
                <Link to={path} className="navLink"><p>{label}</p></Link>
            </Grid>
        </Grid>
    );
}

export default NavbarItem;