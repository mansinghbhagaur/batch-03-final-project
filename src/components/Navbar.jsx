import React from 'react'
import { Typography, IconButton, AppBar as MuiAppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
      shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
      transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
      }),
      variants: [
            {
                  props: ({ open }) => open,
                  style: {
                        width: `calc(100% - ${drawerWidth}px)`,
                        marginLeft: `${drawerWidth}px`,
                        transition: theme.transitions.create(['margin', 'width'], {
                              easing: theme.transitions.easing.easeOut,
                              duration: theme.transitions.duration.enteringScreen,
                        }),
                  },
            },
      ],
}));

const Navbar = ({ open, handleDrawerOpen }) => {

      return (
            <>
                  <AppBar position="fixed" open={open}>
                        <Toolbar>
                              <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={[
                                          {
                                                mr: 2,
                                          },
                                          open && { display: 'none' },
                                    ]}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography variant="h6" noWrap component="div">
                                    Persistent drawer
                              </Typography>
                        </Toolbar>
                  </AppBar>
            </>
      )
}

export default Navbar
