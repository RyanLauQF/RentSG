import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ setSearchQuery }) {
  return (
    <form style={{ paddingTop: 20, alignSelf: 'center' }}>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Search Pass Type..."
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: 'black' }} />
      </IconButton>
    </form>
  );
}

const filterTheData = (query, data) => {
  if (!query) {
    return data;
  }
  // Convert the query to lowercase
  const lowercaseQuery = query.toLowerCase();

  // Filter the data based on the query
  return data
    .filter(
      (d) =>
        // Check if the query is present in the category or passTypes of the data item
        d.category.toLowerCase().includes(lowercaseQuery) ||
        d.passTypes.some((passType) =>
          passType.toLowerCase().includes(lowercaseQuery)
        )
    )
    .filter((d) => d.passTypes.length > 0);
};

const passData = [
  {
    category: 'Professionals',
    passTypes: [
      'Employment Pass',
      'EntrePass',
      'Personalised Employment Pass',
      'Overseas Networks & Expertise Pass',
    ],
  },
  {
    category: 'Skilled and Semi-skilled',
    passTypes: [
      'S Pass',
      'Work Permit for Migrant Worker',
      'Work Permit for Migrant Domestic Worker',
      'Work Permit for Confinement Nanny',
      'Work Permit for Performing Artiste',
    ],
  },
  {
    category: 'Trainees and Students',
    passTypes: [
      'Training Employment Pass',
      'Work Holiday Pass (Work Holiday Programme)',
      'Work Holiday Pass (Work Holiday Visa Programme)',
      'Training Work Permit',
    ],
  },
  {
    category: 'Family Members',
    passTypes: [
      "Dependant's Pass",
      'Long-Term Visit Pass',
      'Pre-approved Letter of Consent',
      'Letter of Consent for ICA-issued LTVP/LTVP+ Holders',
      'Letter of Consent for Dependant’s Pass Holders who are Business Owners',
    ],
  },
  {
    category: 'Exemptions and Working on Visit Pass',
    passTypes: [
      'Miscellaneous Work Pass',
      'Work Pass Exempt Activities',
      'Work pass exemption for Foreign Students',
      'Work passes for Holders of Long-Term Visit Passes issued by ICA',
    ],
  },
];

export default function TenantOnboarding() {
  const [searchQuery, setSearchQuery] = useState('');
  const dataFiltered = filterTheData(searchQuery, passData);

  const [selectedButtonID, setSelectedButton] = useState('');
  const [selected, setSelected] = useState(false);

  const handleSelected = (select) => {
    setSelected(select);
  };

  const handleButtonClick = (event) => {
    const buttonText = event.target.textContent;
    const buttonID = event.target.id;

    if (buttonID === selectedButtonID) {
      event.target.style.backgroundColor = '#f3f4f6';
      handleSelected(false);
      setSelectedButton(null);
    } else {
      const prevButton = document.getElementById(selectedButtonID);
      if (prevButton) {
        prevButton.style.backgroundColor = '#f3f4f6';
      }
      event.target.style.backgroundColor = '#9ca3af';
      handleSelected(true);
      setSelectedButton(buttonText);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 60,
        }}
      >
        <Typography
          fontSize="20px"
          sx={{ color: 'primary.main', fontWeight: 600, px: 3 }}
        >
          Which Pass Do You Hold?
        </Typography>
      </div>
      <SearchBar psearchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {dataFiltered.length !== 0 ? (
        <div style={{ paddingTop: 20 }}>
          {dataFiltered.map((cat) => (
            <div style={{ paddingBottom: 30 }}>
              <Typography fontSize="18px" sx={{ fontWeight: 600, px: 3 }}>
                {cat.category}
              </Typography>
              <Divider
                variant="middle"
                sx={{ borderBottomWidth: 1, borderColor: 'black' }}
              />
              <div style={{ paddingLeft: 20 }}>
                {cat.passTypes.map((pass) => (
                  <Button
                    disableRipple
                    sx={{
                      textAlign: 'left',
                      fontSize: 15,
                      variant: 'contained',
                      color: 'black',
                      background: '#f3f4f6',
                      marginRight: 3,
                      marginTop: 2,
                      transition: '0.1s ease-in-out',
                      '&:hover': {
                        backgroundColor: '#d1d5db',
                      },
                      textTransform: 'none',
                    }}
                    style={{
                      borderRadius: 10,
                      padding: 10,
                      whiteSpace: 'initial',
                      maxWidth: '300px',
                    }}
                    id={pass}
                    onClick={handleButtonClick}
                  >
                    {pass}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 30,
          }}
        >
          <Typography
            fontSize="20px"
            sx={{ color: 'grey', fontWeight: 600, px: 3 }}
          >
            Pass Type not found!
          </Typography>
        </div>
      )}
      {selected && (
        <Fab
          style={{
            position: 'fixed',
            bottom: 30,
            right: 20,
            width: 70,
            height: 70,
          }}
          color="primary"
          component={Link}
          to="/tenant/onboard/scan/pass"
        >
          <NavigateNextIcon fontSize="large" />
        </Fab>
      )}
    </div>
  );
}
