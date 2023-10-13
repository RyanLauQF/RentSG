import { Box, CardContent, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
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
              <CardContent
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingTop: 1,
                }}
              >
                <img
                  src="/assets/home_icon.jpg"
                  alt="home-icon"
                  width="260px"
                />
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
                    Home Owner
                  </Typography>
                </div>
              </CardContent>
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
                  backgroundColor: 'primary.main',
                  color: 'secondary.main',
                },
              }}
            >
              <CardContent
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingTop: 1,
                }}
              >
                <img
                  src="/assets/tenants_icon.png"
                  alt="tenant-icon"
                  width="250px"
                />
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
