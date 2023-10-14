import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';

// this to return the residence card
export default function ResidenceDisplay({ residences }) {
  return (
    <>
      {Object.entries(residences).map(([key, residence]) => (
        <Card
          sx={{ backgroundColor: '#81cdc6', m: 2, borderRadius: '10px' }}
          height="100vh"
        >
          <CardContent>
            <Stack
              direction="row"
              sx={{ alignItems: 'center', justifyContent: 'space-around' }}
            >
              <Tooltip title="Residences">
                <Avatar sx={{ width: 80, height: 80 }}>
                  <img
                    src={residence.imgSrc}
                    alt="condo"
                    width={100}
                    height={80}
                  />
                </Avatar>
              </Tooltip>

              <Stack direction="column">
                <Typography
                  variant="body1"
                  style={{ fontWeight: 'bold', color: '#002d40' }}
                >
                  {residence.residenceName}
                </Typography>
                <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                  <span style={{ color: '#002d40' }}>Type:</span>{' '}
                  <span style={{ color: '#ff414d' }}>{residence.type}</span>
                </Typography>
                <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                  <span style={{ color: '#002d40' }}>Availability:</span>{' '}
                  <span style={{ color: '#ff414d' }}>
                    {residence.availability}
                  </span>
                </Typography>
              </Stack>
              <IconButton
                onClick={() => alert('delete')}
                sx={{ marginRight: 1, marginTop: 1 }}
              />
            </Stack>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
