import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {
    Add as AddIcon,
    Remove as RemoveIcon,
    ShoppingCart as ShoppingCartIcon
} from "@mui/icons-material";
import {addToCart, increaseCount, decreaseCount} from "../state";

export default function MediaCard({item}) {

    const dispatch = useDispatch();
    const cart = useSelector(({cart: { cart }}) => cart);

    const isItemInCart = cart.find(i => i.id === item.id);
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <Box
            style={{cursor: "pointer"}}
        >
            <Card sx={{maxWidth: 350, minHeight: 400}}>
                <CardMedia
                    sx={{height: 140}}
                    image={item.image}
                    title={item.title}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                        title={item.title}
                    >
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {
                            isReadMore ? item.description.slice(0, 100) : item.description
                        }
                        <span style={{color: "green", cursor: "pointer"}}
                              onClick={(e) => {
                                  e.stopPropagation();
                                  toggleReadMore()
                              }}
                        >
                            {isReadMore ? " ...read more" : " Show less"}
                        </span>
                    </Typography>

                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div className={"price-text"}>$ {item.price}</div>

                    {
                        isItemInCart ? (
                            <Box
                                display={"flex"}
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <IconButton onClick={(e) => {
                                    e.stopPropagation();
                                    // setCount(Math.max(count - 1, 1))
                                    dispatch(decreaseCount(item.id))
                                }}>
                                    <RemoveIcon/>
                                </IconButton>

                                <Typography>{isItemInCart?.count}</Typography>

                                <IconButton onClick={(e) => {
                                    e.stopPropagation();
                                    // count < 10 ? setCount(count + 1) : setCount(count);
                                    dispatch(increaseCount(item.id));
                                }}>
                                    <AddIcon/>
                                </IconButton>
                            </Box>
                        ) : (
                            <button
                                className={"cart-button"}
                                onClick={(e) => {
                                    e.stopPropagation();
                                        dispatch(addToCart({id: item.id, count: 1}));                                    
                                }}
                            >
                                <span className="add-to-cart">Add to cart</span>
                                <span className="added"></span>
                                <ShoppingCartIcon className={"fa-shopping-cart"}/>
                            </button>
                        )
                    }

                </CardActions>
            </Card>
        </Box>
    );
}
