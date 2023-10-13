import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import tenantsData from '../../assets/tenants.json';
import BotButton from '../shared/BotButton';
import BotttomNavBar from '../shared/BottomNavBar';
import TenantProfileDets from '../shared/TenantProfileDets';

export default function TenantProfilePage() {
  const tenantID = '000'; // placeholder
  const tenant = tenantsData.tenants[tenantID];

  return (
    <>
      <TenantProfileDets tenant={tenant} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 3, pb: 7 }}
      >
        <Typography variant="body2" sx={{ pt: 1.2 }}>
          Use this to connect with a landlord:
        </Typography>
        <Box
          component="img"
          sx={{
            height: 180,
            width: 180,
          }}
          alt="QRcode"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKrSURBVO3BQW7kQAwEwUxC//9yrY88NSBIM2sTjDA/WGMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRrl4iGVb0rCHSonSThR+aYkPFGsUYo1SrFGuXhZEt6kcqLyTUl4k8qbijVKsUYp1igXH6ZyRxLuSEKn0iWhU3mTyh1J+KRijVKsUYo1ysVwKl0SOpUuCX9ZsUYp1ijFGuXij1O5Q2WyYo1SrFGKNcrFhyXhk5JwonKShCeS8JsUa5RijVKsUS5epvJNKl0STpLQqXRJOFH5zYo1SrFGKdYo5gdrjGKNUqxRijXKxUMqXRI6lS4JnUqXhE6lS8KJSpeEE5UuCXeodEk4UemS8KZijVKsUYo1ysXLVLokdConKl0SOpUnVLok3KHymxVrlGKNUqxRLr4sCXeodEnoVE5U7lB5QuUOlS4JTxRrlGKNUqxRLl6WhE6lS8IdSehU7khCp9KpnCShUzlJwonKJxVrlGKNUqxRLl6mcqLyRBLelIQTlS4JnUqn0iWhS0Kn8qZijVKsUYo1ysVDSfifVO5Iwm+ShDcVa5RijVKsUS4eUvmmJHRJ6FTuUOmS0CWhU3lC5SQJTxRrlGKNUqxRLl6WhDepfFISTlS6JLwpCW8q1ijFGqVYo1x8mModSbhDpUvCHSpdEk5UTpJwkoRPKtYoxRqlWKNc/HFJ6FS6JHQqXRI6lS4JJyp3qHRJeFOxRinWKMUa5eKPU/kklTtUTpLQqXRJeKJYoxRrlGKNcvFhSfikJJyonKicJOFEpUvCiUqXhDcVa5RijVKsUS5epvJNKk8koVPpVLokvEmlS8ITxRqlWKMUaxTzgzVGsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxR/gEuBu4UJrCvfQAAAABJRU5ErkJggg=="
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <BotButton />
        <BotttomNavBar account="tenant" />
      </Box>
    </>
  );
}
