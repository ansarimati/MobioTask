import {Box, Button, IconButton, Typography} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { setIsCartOpen, removeFromCart } from "../state";
import { useNavigate } from "react-router-dom";

const CartManu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cart);
    const items = useSelector((state) => state.cart.items);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const cartItems = {};
    cart.map((item) => {
        cartItems[item.id] = item.count;
        return item;
    });

    const cartItemsKeys = Object.keys(cartItems);
    const cartData = items.filter((item) => {
        return cartItemsKeys.includes(item.id.toString());
    });

    const totalPrice = cartData.reduce((total, item) => {
        console.log("item", item)
        return total + cartItems[item.id] * item.price;
    }, 0);

    return(
        <Box
            display={isCartOpen ? "block" : "none"}
            bgcolor="rgba(0, 0, 0, 0.4)"
            position="fixed"
            zIndex={10}
            width="100%"
            height="100%"
            left="0"
            top="0"
            overflow="auto"
        >
            {/* MODAL */}
            <Box
                position="fixed"
                right="0"
                bottom="0"
                width="max(400px, 30%)"
                height="100%"
                bgcolor="white"
            >
                <Box padding="30px" overflow="auto" height="100%">
                    {/* Header */}
                    <Box mb="15px" display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5">SHOPPING BAG ({cartData.length})</Typography>
                        <IconButton onClick={()=> dispatch(setIsCartOpen({}))}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* CART LIST */}
                    <Box>
                        {cartData.map((item) => (
                            <Box key={item.id}>
                                <Box 
                                    display="flex" 
                                    justifyContent="space-around" 
                                    flexDirection="column" 
                                    alignItems="center"
                                    mb={5}
                                >
                                    <img 
                                        width="100px"
                                        src={item.image} 
                                        alt={item.title}
                                    />
                                    <Typography 
                                        fontSize={10}
                                        width="80%"
                                        mt={2}
                                        sx={{
                                            textOverflow: "ellipsis",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    
                                    <Box
                                        display="flex"
                                        justifyContent="space-evenly"
                                        width="90%"
                                    >
                                        <Typography variant="h6">
                                            Total Price ${item.price * cartItems[item.id]}
                                        </Typography>
                                        <Typography variant="h6">
                                            Item Count {cartItems[item.id]}
                                        </Typography>
                                    </Box>

                                    <Button
                                        onClick={() => dispatch(removeFromCart({id: item.id}))}
                                        variant="outlined"
                                    >
                                        Remove from cart
                                    </Button>

                                </Box>
                            </Box>
                        ))}
                        
                        <Box display="flex" flexDirection="column">
                            <Typography textAlign="center" variant="h4" mt={10}>
                                Grand Price ${totalPrice}
                            </Typography>
                            
                            <Button 
                                variant="contained" 
                                mt="10px"
                                onClick={() => {
                                    dispatch(setIsCartOpen({}))
                                    navigate("/checkout")
                                }}
                            >
                                Checkout
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
};

export default CartManu;