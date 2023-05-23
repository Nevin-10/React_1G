import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar >
                <Typography sx={{ flexGrow: 1 }} color= {'pink'} >New App!!</Typography>
                <Button variant = "contained" color="warning" size="medium">LOGIN</Button>
            
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar