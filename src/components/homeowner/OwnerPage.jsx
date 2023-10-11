import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React from 'react';

import AddPerson from './components/AddPerson';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';
import PersonCard from './components/PersonCard';

const dateConverter = (passExpiry) => {
  const currentDate = new Date();
  const passExpiryDate = new Date(passExpiry);

  // Calculate the time difference in milliseconds
  const timeDifference = passExpiryDate - currentDate;

  // Calculate the time thresholds in milliseconds
  const oneMonthInMillis = 30 * 24 * 60 * 60 * 1000; // 30 days
  const threeMonthsInMillis = 3 * 30 * 24 * 60 * 60 * 1000; // 180 days

  if (timeDifference < 0) {
    // If the provided date is in the past
    return '#ff8787'; // Expired (in red)
  }
  if (timeDifference <= oneMonthInMillis) {
    return '#ffd43b'; // Less than 1 month away (in yellow)
  }
  if (timeDifference <= threeMonthsInMillis) {
    return 'orange'; // Between 1 and 6 months away (in orange)
  }
  return '#69db7c'; // More than 6 months away (in green)
};

const landLord = {
  firstName: 'Land',
  lastName: 'lord',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/en/7/72/Housing_and_Development_Board_%28logo%29.png',
  residences: ['Binjai Hall #19', 'Tanjong Hall #20', 'Banyan Hall #21'],
  nric: 'S123456789',
  nok: 'John Tan, 81234567, Tampines Ave 1 #12-345',
  contact: '987654321',
};

const tenants = {
  Bob: {
    firstName: 'Bob',
    lastName: 'Tan',
    id: 1,
    passExpiry: '25-06-2028',
    leaseExpiry: '23-06-2028',
    imageUrl:
      'https://onecms-res.cloudinary.com/image/upload/s--4SDj7ump--/f_auto,q_auto/v1/mediacorp/tdy/image/2022/07/24/20220617_llt_uncle_raymond-3.jpg?itok=PT3Sdazu',
    residence: 'Binjai Hall #19',
  },
  Alice: {
    firstName: 'Alice',
    lastName: 'Smith',
    id: 2,
    passExpiry: '30-09-2029',
    leaseExpiry: '28-09-2029',
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/IEGNapdUW_qWZk7QNlUH3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMjQ7aD03Njg-/https://media.zenfs.com/en-SG/homerun/rice_643/1d5468dbcffaa324d7004196cefa28dd',
    residence: 'Tanjong Hall #20',
  },
  Muthu: {
    firstName: 'Muthu',
    lastName: 'Samy',
    id: 3,
    passExpiry: '16-10-2023',
    leaseExpiry: '10-10-2028',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxBqFSUq0QiZoLQZ1iE2oVwqdhWWpc2RWn7HkYHLi_w0-rbhKX8LPy6VJog16qUh68dA&usqp=CAU',
    residence: 'Binjai Hall #19',
  },
  Samantha: {
    firstName: 'Samantha',
    lastName: 'Kim',
    id: 4,
    passExpiry: '11-09-2023',
    leaseExpiry: '10-10-2028',
    imageUrl:
      'https://i.pinimg.com/550x/73/78/80/7378801425159433775aac513398d7bf.jpg',
    residence: 'Binjai Hall #19',
  },
  Rachel: {
    firstName: 'Rachel',
    lastName: 'Kim',
    id: 5,
    passExpiry: '10-10-2023',
    leaseExpiry: '10-10-2028',
    imageUrl:
      'https://i.pinimg.com/550x/73/78/80/7378801425159433775aac513398d7bf.jpg',
    residence: 'Banyan Hall #21',
  },
};

export default function HomeOwnerPage() {
  // will need to have the function to add a new fella
  // will need to have the function to change the colour of the background

  const tenantsByResidence = Object.values(tenants).reduce((acc, tenant) => {
    if (!acc[tenant.residence]) {
      acc[tenant.residence] = [];
    }
    acc[tenant.residence].push(tenant);
    return acc;
  }, {});

  const styles = {
    scrollableContent: {
      overflowY: 'auto',
      height: 'calc(100vh - 9rem)', // Adjust as needed
    },
  };

  return (
    <>
      {/* <ResponsiveAppBar
        ownerName={landLord.firstName}
        residenceList={landLord.residences}
        image={landLord.imageUrl}
        nric={landLord.nric}
        nok={landLord.nok}
        contact={landLord.contact}
      /> */}

      <Header name={landLord.firstName} />
      {/* Render tenants by residence */}

      {/* <BotButton /> */}
      <div className="content-holder" style={styles.scrollableContent}>
        {Object.entries(tenantsByResidence).map(
          ([residence, residenceTenants]) => (
            <Box key={residence} m="1rem">
              <Typography variant="body2" marginLeft="1rem">
                Address:
                {residence}
              </Typography>
              <Divider
                variant="middle"
                sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}
              />
              {residenceTenants.map((tenant) => (
                <PersonCard
                  key={tenant.id}
                  firstName={tenant.firstName}
                  lastName={tenant.lastName}
                  passExpiry={tenant.passExpiry}
                  leaseExpiry={tenant.leaseExpiry}
                  image={tenant.imageUrl}
                  isPassExpiryValid={dateConverter(tenant.passExpiry)}
                />
              ))}
              <AddPerson />
            </Box>
          )
        )}
      </div>
      <BottomNavigation
        ownerName={landLord.firstName}
        residenceList={landLord.residences}
        image={landLord.imageUrl}
        nric={landLord.nric}
        nok={landLord.nok}
        contact={landLord.contact}
      />
    </>
  );
}
