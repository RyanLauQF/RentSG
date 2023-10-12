import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <IconButton onClick={goBack} sx={{ padding: 2 }}>
      <ArrowBackIcon />
    </IconButton>
  );
}

function TenantDetail({ det, value }) {
  return (
    <Box px={4} py={1.2}>
      <Typography variant="subtitle2">{det}:</Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
}

function TenantDetails({ tenant }) {
  return (
    <Box>
      <TenantDetail det="Name" value={tenant.name} />
      <TenantDetail det="FIN Number" value={tenant.finNumber} />
      <TenantDetail det="Nationality" value={tenant.nationality} />
      <TenantDetail det="Pass Expiry" value={tenant.pass.passExpiry} />
      <TenantDetail det="Contact No" value={tenant.contactNo} />
    </Box>
  );
}

export default function TenantProfilePage() {
  const tenant = {
    firstName: 'John',
    lastName: 'Doe',
    finNumber: '123456789',
    contactNo: '81234567',
    nationality: 'American',
    imageUrl:
      'https://onecms-res.cloudinary.com/image/upload/s--4SDj7ump--/f_auto,q_auto/v1/mediacorp/tdy/image/2022/07/24/20220617_llt_uncle_raymond-3.jpg?itok=PT3Sdazu',
    pass: {
      valid: true,
      passExpiry: '25-06-2028',
      passType: 'FIN',
    },
    residence: {
      hasResidence: true,
      residenceAddress: 'Binjai Hall #19',
      leaseExpiry: '23-06-2028',
    },
  };

  return (
    <>
      <BackButton />
      <Typography variant="h6" sx={{ px: 3 }}>
        Profile
      </Typography>
      <Divider
        variant="middle"
        sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 3 }}
      >
        <Paper
          sx={{
            width: 128,
            height: 128,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PersonIcon
            sx={{
              width: 128,
              height: 128,
              alignContent: 'center',
              color: 'primary.main',
            }}
          />
        </Paper>
      </Box>
      <TenantDetails tenant={tenant} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
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
    </>
  );
}
