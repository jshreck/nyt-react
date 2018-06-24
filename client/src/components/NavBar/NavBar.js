import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
             <h1>New York Times Article Search</h1>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;