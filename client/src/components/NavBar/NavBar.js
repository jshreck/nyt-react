import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
             <h1>New York Times Article Search</h1>
             <a href="/">Search for Articles</a>
             <a href="/saved">Saved Articles</a>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;