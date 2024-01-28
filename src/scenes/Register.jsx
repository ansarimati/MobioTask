import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";


const Register = () => {
  return (
    <Box marginTop="80px" px={2} pb={2}>
        <Typography textAlign="center" variant="h4" mb={4}>Register</Typography>
        <Box 
            display="flex" 
            flexDirection="column" 
            width="40%" 
            margin="auto"
            rowGap={4}
        >
            <TextField id="firstname" label="First Name" type="text" variant="filled"/>
            <TextField id="lastname" label="Last Name" type="text" variant="filled"/>
            <TextField id="email" label="Email" type="email" variant="filled"/>
            <TextField id="phone" label="Phone Number" type="number" variant="filled"/>
        </Box>  
        <Box display="flex" justifyContent="center" mt={5}>
            <Button variant="contained">Rigister</Button>
        </Box>
    </Box>
  )
}

export default Register;