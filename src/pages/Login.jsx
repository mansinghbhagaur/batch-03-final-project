import React from 'react'
import Box from "@mui/material/Box"
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import LockOutlineIcon from '@mui/icons-material/LockOutline';
// import { Grid2 } from '@mui/material';
const Login = () => {
      return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <Container maxWidth="xs">
                        <Box component={Paper} elevation={20} sx={{ p: 5 }}>
                              <Typography variant='h5' sx={{ mb: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'red' }}>
                                          <LockOutlineIcon />
                                    </Avatar>
                                    Login
                              </Typography>

                              <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                          <TextField label="username" placeholder='Enter your username' fullWidth size='small' />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                          <TextField label="username" placeholder='Enter your username' fullWidth size='small' />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                          <Button type='submit' fullWidth variant='contained'>Signin</Button>
                                    </Grid>
                              </Grid>
                        </Box>
                  </Container>
            </Box>
      )
}

export default Login
