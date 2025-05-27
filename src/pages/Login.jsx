import React, { useState } from 'react'
import Box from "@mui/material/Box"
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { Link, useNavigate } from 'react-router';
import { useFormik } from 'formik'
// import { Grid2 } from '@mui/material';
const Login = () => {
      // const [values, setValues] = useState({
      //       email: '',
      //       password: '',
      //       confirmPassword: ''
      // })

      const navigate = useNavigate();

      // // onchange logic 
      // const handleChange = (e) => {
      //       const { name, value } = e.target;
      //       setValues((prev) => ({ ...prev, [name]: value }));
      // }


      // // form submit code
      // const handleSubmit = (e) => {
      //       e.preventDefault();
      //       console.log('form submitted', values)
      //       navigate('/dashboard');
      // }

      // const formik = useFormik({

      // });

      // console.log(formik, "formik")

      const { values, handleChange, handleSubmit, errors, isSubmitting, setSubmitting } = useFormik({
            initialValues: {
                  email: '',
                  password: '',
                  confirmPassword: ''
            },
            validate: (values) => {
                  const errors = {};
                  if (!values.email) {
                        errors.email = 'Email is Required';
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                  } else if (!values.password) {
                        errors.password = 'Password is required'
                  } else if (!values.confirmPassword) {
                        errors.confirmPassword = 'Confirm Password is required'
                  } else if (values.password !== values.confirmPassword) {
                        errors.confirmPassword = 'Confirm password mistach'
                  }
                  return errors;
            },
            onSubmit: (values, { resetForm }) => {
                  navigate("/dashboard")
                  resetForm();
                  setSubmitting(true)
                  setTimeout(() => {
                        setSubmitting(false)
                  }, 4000);
            }
      });

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
                                                      value={values.email} onChange={handleChange} error={errors.email} helperText={errors.email} />
                                                {/* {errors && errors.email && <h1>{errors.email}</h1>} */}
                                          </Grid>
                                          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                                <TextField label="password" name="password" placeholder='Enter your password'
                                                      fullWidth size='small' value={values.password} onChange={handleChange} error={errors.password}
                                                      helperText={errors.password} />
                                          </Grid>

                                          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                                <TextField label="confirm password" name="confirmPassword" placeholder='Enter your confirm password' error={errors.confirmPassword}
                                                      helperText={errors.confirmPassword}
                                                      fullWidth size='small' value={values.confirmPassword} onChange={handleChange} />
                                          </Grid>
                                          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12 }}>
                                                <Button type='submit' disabled={isSubmitting} fullWidth variant='contained'>Signin</Button>
                                          </Grid>
                                    </Grid>
                              </form>
                              <Link to="/signup">create your account signup</Link>
                        </Box>
                  </Container>
            </Box>
      )
}

export default Login
