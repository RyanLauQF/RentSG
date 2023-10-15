import { Box, CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // minHeight="100vh"
      sx={{
        maxHeight: '100vh', // Set a maximum height equal to the viewport's height
        overflow: 'auto',
        p: 3, // Add scrollbars if the content overflows
      }}
    >
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: 'h5.fontSize',
              color: 'primary.main',
            }}
          >
            Are you a...
          </Typography>
        </Grid>
        <Grid item>
          <Link to="/owner" style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 6,
                minWidth: 280,
                minHeight: 280,
                backgroundColor: 'secondary.main',
                transition: 'transform 0.1s ease-in-out',
                color: 'primary.main',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'primary.main',
                  color: 'secondary.main',
                },
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingTop: 1,
                    justifyContent: 'center',
                    display: 'flex',
                  }}
                >
                  <Stack>
                    <img src="/assets/key.png" alt="home-icon" width="190px" />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: 'h7.fontSize',
                          marginTop: 2,
                          // color: 'primary.main',
                        }}
                      >
                        Home Owner
                      </Typography>
                    </div>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Grid item>
          <Link to="tenant/onboard/pass/" style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 6,
                minWidth: 280,
                minHeight: 280,
                backgroundColor: 'secondary.main',
                transition: 'transform 0.1s ease-in-out',
                color: 'primary.main',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: '#1aa6b7',
                  color: 'secondary.main',
                },
              }}
            >
              <CardContent
                sx={{
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingBottom: 0,
                  paddingTop: 2,
                }}
              >
                <img src="/assets/tenant.png" alt="tenant-icon" width="250px" />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 'h7.fontSize',
                      // color: 'primary.main',
                    }}
                  >
                    Tenant
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
