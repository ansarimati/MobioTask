import React from "react";
import {useDispatch} from "react-redux";
import {Box, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import {sortItems} from "../state";

export default function BasicSelect() {
    const dispatch = useDispatch();
    const [sortByValue, setSortByValue] = React.useState("title");

    const handleChange = ({target: {value}}) => {
        setSortByValue(value);
        dispatch(sortItems(value));
    };

    return (
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}} paddingX={2} paddingBottom={2}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortByValue}
                    label="Sort by"
                    onChange={handleChange}
                    sx={{
                        width: "400px"
                    }}
                >
                    <MenuItem value={"title"}>Name</MenuItem>
                    <MenuItem value={"price"}>Price</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
