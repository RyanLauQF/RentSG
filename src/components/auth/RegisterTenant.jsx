import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Stack, TextField, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const tenantInfo = {
  name: 'Bob Tan',
  fin: 'G8765432A',
  dateOfBirth: '12 May 1980',
  sex: 'Male',
  nationality: 'Indonesian',
  issueDate: '26 Aug 2023',
  expiryDate: '29 Aug 2024',
  employer: 'NiL',
  address: '123 Goldwater Avenue #01-55 Singapore 126358',
};

export default function RegisterForm() {
  const [name, setName] = useState(tenantInfo.name);
  const [fin, setFin] = useState(tenantInfo.fin);
  const [dateOfBirth, setDateOfBirth] = useState(tenantInfo.dateOfBirth);
  const [sex, setSex] = useState(tenantInfo.sex);
  const [nationality, setNationality] = useState(tenantInfo.nationality);
  const [issueDate, setIssueDate] = useState(tenantInfo.issueDate);
  const [expiryDate, setExpiryDate] = useState(tenantInfo.expiryDate);
  const [employer, setEmployer] = useState(tenantInfo.employer);
  const [address, setAddress] = useState(tenantInfo.address);

  function handleChange(event) {
    const key = event.target.id;
    const { value } = event.target;

    switch (key) {
      case 'name':
        setName(value);
        break;
      case 'fin':
        setFin(value);
        break;
      case 'dob':
        setDateOfBirth(value);
        break;
      case 'sex':
        setSex(value);
        break;
      case 'nationality':
        setNationality(value);
        break;
      case 'issue-date':
        setIssueDate(value);
        break;
      case 'expiry-date':
        setExpiryDate(value);
        break;
      case 'employer':
        setEmployer(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        break;
    }
  }

  const allFieldsFilledd =
    name !== '' &&
    fin !== '' &&
    dateOfBirth !== '' &&
    sex !== '' &&
    nationality !== '' &&
    issueDate !== '' &&
    expiryDate !== '' &&
    employer !== '' &&
    address !== '';

  return (
    <Stack
      spacing={1}
      direction="column"
      align-items="center"
      marginX={5}
      overflow="auto"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 30,
          paddingBottom: 20,
        }}
      >
        <Typography
          fontSize="20px"
          sx={{ color: 'grey', fontWeight: 600, px: 3 }}
        >
          Confirm Your Pass Details
        </Typography>
      </div>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        defaultValue={name}
        onChange={(e) => handleChange(e)}
        error={name === ''}
        helperText={name === '' ? 'Empty field!' : ' '}
      />
      <TextField
        id="fin"
        label="Fin"
        variant="outlined"
        defaultValue={fin}
        onChange={(e) => handleChange(e)}
        error={fin === ''}
        helperText={fin === '' ? 'Empty field!' : ' '}
      />
      <TextField
        id="dob"
        label="Date Of Birth"
        variant="outlined"
        defaultValue={dateOfBirth}
        onChange={(e) => handleChange(e)}
        error={dateOfBirth === ''}
        helperText={dateOfBirth === '' ? 'Empty field!' : ' '}
      />
      <TextField
        id="sex"
        label="Sex"
        variant="outlined"
        defaultValue={sex}
        onChange={(e) => handleChange(e)}
        error={sex === ''}
        helperText={sex === '' ? 'Empty field!' : ' '}
      />
      <TextField
        id="nationality"
        label="Nationality"
        variant="outlined"
        defaultValue={nationality}
        onChange={(e) => handleChange(e)}
        error={nationality === ''}
        helperText={nationality === '' ? 'Empty field!' : ' '}
      />
      <TextField
        id="issue-date"
        label="Pass Issue Date"
        variant="outlined"
        defaultValue={issueDate}
        onChange={(e) => handleChange(e)}
        error={issueDate === ''}
        helperText={issueDate === '' ? 'Empty field!' : ' '}
      />
      <TextField
        id="expiry-date"
        label="Pass Expiry Date"
        variant="outlined"
        defaultValue={expiryDate}
        onChange={(e) => handleChange(e)}
        error={expiryDate === ''}
        helperText={expiryDate === '' ? 'Empty field!' : ' '}
      />
      <TextField
        id="employer"
        label="Employer"
        variant="outlined"
        defaultValue={employer}
        onChange={(e) => handleChange(e)}
        error={employer === ''}
        helperText={employer === '' ? 'Empty field!' : ' '}
      />
      <TextField
        id="address"
        label="Address"
        variant="outlined"
        defaultValue={address}
        onChange={(e) => handleChange(e)}
        error={address === ''}
        helperText={address === '' ? 'Empty field!' : ' '}
      />
      <Fab
        style={{
          position: 'fixed',
          bottom: 30,
          right: 20,
          width: 70,
          height: 70,
          visibility: allFieldsFilledd ? 'visible' : 'hidden',
        }}
        color="primary"
        component={Link}
        to="/tenant/onboard/scan/face"
      >
        <NavigateNextIcon fontSize="large" />
      </Fab>
    </Stack>
  );
}
