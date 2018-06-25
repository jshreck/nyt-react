import React from "react";
import "./Article.css";
import { Grid, Paper, Button } from "@material-ui/core";

const Article = (props) => {
    return (
        <Grid item xs={10}>
            <Paper>
                <h2>{props.title}</h2>
                <h6>{props.byline}, published {props.pubDate}</h6>
                <p>{props.snippet}</p>
                <Button variant="contained" href={props.link}>
                    Read It
                </Button>
                <Button variant="contained" onClick={props.onClick} data-id={props.id}>
                    {props.btnTxt}
                </Button>
            </Paper>
        </Grid>
    )
}

export default Article;