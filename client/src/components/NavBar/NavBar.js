import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import "./NavBar.css"

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <h1 className="title">New York Times Article Search</h1>
                <Button color="inherit" className="x" href="/">Search for Articles</Button>
                <Button color="inherit" className="x" href="/saved">Saved Articles</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;