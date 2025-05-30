import { Typography, Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReuseButton } from "../components/ReuseButton";
import { Add } from "@mui/icons-material";

const Dashboard = () => {
      const Item = styled(Paper)(({ theme }) => ({
            padding: theme.spacing(1),
            textAlign: "center",
            width: '240px',
            color: theme.palette.text.secondary,
      }))
      return (
            <>
                  <Grid container spacing={8}>
                        {/* <Grid item sm={6} md={12}>
                              <Box sx={{ width: '240px', background: 'red', padding: '20px', textAlign: 'center' }}>
                                    <Typography variant="h6">0</Typography>
                                    <Typography variant="h6">Users</Typography>
                              </Box>
                        </Grid>
                        <Grid item sm={6}>
                              <Box sx={{ width: '240px', background: 'red', padding: '20px', textAlign: 'center' }}>
                                    <Typography variant="h6">0</Typography>
                                    <Typography variant="h6">Users</Typography>
                              </Box>
                        </Grid>
                        <Grid item sm={6}>
                              <Box sx={{ width: '240px', background: 'red', padding: '20px', textAlign: 'center' }}>
                                    <Typography variant="h6">0</Typography>
                                    <Typography variant="h6">Users</Typography>
                              </Box>
                        </Grid> */}
                        <Grid item sm={6}>
                              <Item>
                                    <Typography variant="h6">0</Typography>
                                    <Typography variant="h6">Users</Typography>
                              </Item>
                        </Grid>

                        <Grid item sm={6}>
                              <Item>
                                    <Typography variant="h6">0</Typography>
                                    <Typography variant="h6">Users</Typography>
                              </Item>
                        </Grid>

                        <Grid item sm={6} >
                              <Item>
                                    <Typography variant="h6">0</Typography>
                                    <Typography variant="h6">Users</Typography>
                              </Item>
                        </Grid>
                  </Grid>

                  <ReuseButton variant="contained" color="secondary" sx={{ borderRadius: '50%', width: '50px', height: '50px', margin: '20px' }}>
                        <Add />
                  </ReuseButton>

                  <ReuseButton variant="contained" color="secondary" sx={{ margin: '20px' }}>
                        Submit
                  </ReuseButton>

                  <ReuseButton variant="contained" color="warning" sx={{ margin: '20px' }}>
                        No Thanks
                  </ReuseButton>
            </>
      )
}

export default Dashboard;