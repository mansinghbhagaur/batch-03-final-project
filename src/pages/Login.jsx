import React, { useState } from 'react'
import Box from "@mui/material/Box"
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { useNavigate } from 'react-router';
// import { Grid2 } from '@mui/material';
const Login = () => {
      const [values, setValues] = useState({
            email: '',
            password: '',
            confirmPassword: ''
      })

      const navigate = useNavigate();

      // onchange logic 
      const handleChange = (e) => {
            const { name, value } = e.target;
            setValues((prev) => ({ ...prev, [name]: value }));
      }


      // form submit code
      const handleSubmit = (e) => {
            e.preventDefault();
            console.log('form submitted', values)
            navigate('/dashboard');
      }

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
                              <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                                <TextField label="email" name="email" placeholder='Enter your username' fullWidth size='small'
                                                      value={values.email} onChange={(e) => handleChange(e)} />
                                          </Grid>
                                          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                                <TextField label="password" name="password" placeholder='Enter your password'
                                                      fullWidth size='small' value={values.password} onChange={(e) => handleChange(e)} />
                                          </Grid>

                                          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                                <TextField label="confirm password" name="confirmPassword" placeholder='Enter your confirm password'
                                                      fullWidth size='small' value={values.confirmPassword} onChange={(e) => handleChange(e)} />
                                          </Grid>
                                          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                                <Button type='submit' fullWidth variant='contained'>Signin</Button>
                                          </Grid>
                                    </Grid>
                              </form>
                        </Box>
                  </Container>
            </Box>
      )
}

export default Login
