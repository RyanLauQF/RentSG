import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React from 'react';

import ownersData from '../../assets/owner.json';
import AddPerson from './components/AddPerson';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';
import PersonCard from './components/PersonCard';

export default function HomeOwnerPage() {
  const ownerID = '000'; // placeholder
  const owner = ownersData.owners[ownerID];

  const styles = {
    scrollableContent: {
      overflowY: 'auto',
      height: 'calc(100vh - 9rem)', // Adjust as needed
    },
  };

  return (
    <>
      <Header name={owner.firstName} />
      <div className="content-holder" style={styles.scrollableContent}>
        {owner.residences.map((residence) => (
          <Box key={residence.residenceName} m="1rem">
            <Typography variant="body2" marginLeft="1rem">
              Address:
              {residence.residenceName}
            </Typography>
            <Divider
              variant="middle"
              sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}
            />
            {residence.tenants.map((tenantID) => (
              <PersonCard personID={tenantID} />
            ))}
            <AddPerson />
          </Box>
        ))}
      </div>
      <BottomNavigation
        ownerName={owner.firstName}
        residenceList={owner.residences}
        image={owner.imageUrl}
        nric={owner.nric}
        nok={owner.nok}
        contact={owner.contact}
      />
    </>
  );
}
