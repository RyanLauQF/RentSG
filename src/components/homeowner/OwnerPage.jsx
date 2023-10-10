import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import BotButton from './components/BotButton';
import ResponsiveAppBar from './components/NavBar';
import PersonCard from './components/PersonCard';

const dateConverter = (passExpiry) => {
  const currentDate = new Date();
  const passExpiryDate = new Date(passExpiry);

  // Calculate the time difference in milliseconds
  const timeDifference = passExpiryDate - currentDate;

  // Calculate the time thresholds in milliseconds
  const oneMonthInMillis = 30 * 24 * 60 * 60 * 1000; // 30 days
  const sixMonthsInMillis = 6 * 30 * 24 * 60 * 60 * 1000; // 180 days

  if (timeDifference < 0) {
    // If the provided date is in the past
    return 'red'; // Expired (in red)
  }
  if (timeDifference <= oneMonthInMillis) {
    return 'yellow'; // Less than 1 month away (in yellow)
  }
  if (timeDifference <= sixMonthsInMillis) {
    return 'orange'; // Between 1 and 6 months away (in orange)
  }
  return 'green'; // More than 6 months away (in green)
};

export default function HomeOwnerPage() {
  // will need to have the function to add a new fella
  // will need to have the function to change the colour of the background
  const landLord = {
    firstName: 'land',
    lastName: 'lord',
    residences: ['Binjai Hall #19', 'Tanjong Hall #20', 'Banyan Hall #21'],
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
      passExpiry: '10-16-2023',
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

  const tenantsByResidence = Object.values(tenants).reduce((acc, tenant) => {
    if (!acc[tenant.residence]) {
      acc[tenant.residence] = [];
    }
    acc[tenant.residence].push(tenant);
    return acc;
  }, {});

  return (
    <>
      <ResponsiveAppBar />
      <Typography variant="h5" ml="1rem" mt="0.5rem">
        Hi {landLord.firstName} - {landLord.lastName}
      </Typography>

      {/* Render tenants by residence */}
      {Object.entries(tenantsByResidence).map(
        ([residence, residenceTenants]) => (
          <Box key={residence} m="1rem">
            <Typography variant="body2">Address: {residence}</Typography>
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
          </Box>
        )
      )}

      {Object.entries(tenantsByResidence).map(
        ([residence, residenceTenants]) => (
          <Box key={residence} m="1rem">
            <Typography variant="body2">Address: {residence}</Typography>
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
          </Box>
        )
      )}
      <BotButton />
    </>
  );
}
