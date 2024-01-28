import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid} from "@mui/material";
import SingleItem from "../components/SingleItem";
import Sorting from "../components/Sorting";
import {setItem} from "../state";
import {PRODUCT_API} from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector(({cart: {items}}) => items);
    
    useEffect(() => {
        fetch(PRODUCT_API)
            .then(resp => resp.json())
            .then(resp => {
                dispatch(setItem(resp));
            })
            .catch(err => {
                console.log(err);
            });

    }, [dispatch]);

    return (
        <Box marginTop="80px" px={2} pb={2}>

            <Box display="flex" justifyContent="flex-end" alignContent="center">
                <Button variant="contained" onClick={() => navigate("/register")}>
                    Register
                </Button>
            </Box>

            <Sorting />

            {
                items.length > 0 ? (
                    <Box
                        margin="0 auto"
                        display="grid"
                        gridTemplateColumns="repeat(auto-fill, 300px)"
                        justifyContent="space-around"
                        rowGap="20px"
                        columnGap="1.33%"
                    >
                        {
                            items.map(item => (
                                <Grid item xs={3} key={item.id}>
                                    <SingleItem
                                        item={item}
                                    />
                                </Grid>
                            ))
                        }
                    </Box>
                ) : (
                    <Grid sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "calc(100vh - 200px)"
                    }}>
                        <h1>Loading ...</h1>
                    </Grid>
                )
            }
        </Box>
    )
};

export default Home;