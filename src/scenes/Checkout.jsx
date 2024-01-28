import { Box, Button } from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    return (
        <Box
            marginTop="100px"
            px={2} pb={2}
        >
            <div>Checkout Page</div>

            <Box display="flex" justifyContent="flex-end" alignContent="center">
                <Button variant="contained" onClick={() => navigate("/register")}>
                    Register
                </Button>
            </Box>


            <Box>
                <Checkbox /> <span>Cash on delivery</span>
            </Box>

            <Button variant="contained" onClick={() => {alert("Order successfull!")}}>Order</Button>
        </Box>
    )
};

export default Checkout;