import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Badge, Box, IconButton} from "@mui/material";
import {MenuOutlined, PersonOutline, SearchOutlined, ShoppingBagOutlined} from "@mui/icons-material";
import { setIsCartOpen } from "../state";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(({cart: {cart}}) => cart);
    
    return (
        <Box
            width="100%"
            height="60px"
            margin="auto"
            display="flex"
            top="0"
            justifyContent="space-between"
            alignItems="center"
            position="fixed"
            bgcolor="rgba(68, 65, 65, 0.50)"
        >
            <Box
                onClick={() => navigate("/")}
                sx={{
                    "&:hover": {cursor: "pointer"}
                }}
            >
                Mobio Ecommerce
            </Box>

            <Box
                display="flex"
                justifyContent="space-between"
                columnGap="20px"
            >
                <IconButton>
                    <SearchOutlined/>
                </IconButton>

                <IconButton>
                    <PersonOutline/>
                </IconButton>

                <Badge
                    badgeContent={cart.length}
                    invisible={cart.length === 0}
                    color="secondary"
                    sx={{
                        "& .MuiBadge-badge": {
                            right: 5,
                            top: 5,
                            padding: "0 4px",
                            height: "14px",
                            minWidth: "13px"
                        }
                    }}
                >
                    <IconButton
                        onClick={() => dispatch(setIsCartOpen({}))}
                    >
                        <ShoppingBagOutlined/>
                    </IconButton>
                </Badge>

                <IconButton>
                    <MenuOutlined/>
                </IconButton>
            </Box>
        </Box>
    )
};

export default Navbar;