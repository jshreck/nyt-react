import React from "react";
import { Button } from "@material-ui/core";

const Article = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h6>{props.byline}, published {props.pubDate}</h6>
            <p>{props.snippet}</p>
            <a href={props.link}>Read It</a>

            <Button variant="contained" onClick={props.onClick} data-id={props.id}>
                {props.btnTxt}
            </Button>
        </div>
    )
}

export default Article;