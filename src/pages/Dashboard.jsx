import { Typography, Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

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
            </>
      )
}

export default Dashboard;