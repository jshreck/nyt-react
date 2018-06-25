import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./SearchForm";

const SearchForm = (props) => (
    <Grid item xs={10}>
        <form>
            <TextField
                id="query"
                label="Search"
                type="search"
                name="query"
                defaultValue={props.query}
                onChange={props.onChange}
            />

            <TextField
                id="startDate"
                label="Start"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                name="startDate"
                value={props.startDate}
                onChange={props.onChange}
            />

            <TextField
                id="endDate"
                label="End"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                name="endDate"
                value={props.endDate}
                onChange={props.onChange}
            />

            <Button variant="contained" onClick={props.onClick}>
                Search
            </Button>

        </form>
    </Grid>
);

export default SearchForm;