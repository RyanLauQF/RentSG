import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';

// this to return the residence card
export default function ResidenceDisplay({ allResidences }) {
  return (
    <>
      {Object.entries(allResidences).map(([key, residence]) => (
        <Card
          sx={{ backgroundColor: 'secondary.main', m: 2, borderRadius: '10px' }}
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
                    src={residence.ImgSrc}
                    alt="condo"
                    width={100}
                    height={80}
                  />
                </Avatar>
              </Tooltip>

              <Stack direction="column">
                <Typography
                  variant="body1"
                  style={{ fontWeight: 'bold', color: '#1aa6b7' }}
                >
                  {residence.Address}
                </Typography>
                <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                  <span style={{ color: '#1aa6b7' }}>Type:</span>{' '}
                  <span>{residence.Type}</span>
                </Typography>
                <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                  <span style={{ color: '#1aa6b7' }}>Availability:</span>{' '}
                  <span>{residence.Availability}</span>
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
