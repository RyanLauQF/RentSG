import * as React from 'react';
import { useLocation } from 'react-router-dom';

import tenantsData from '../../assets/tenants.json';
import TenantProfileDets from '../shared/TenantProfileDets';
import BackButton from './components/BackButton';
import FunctionButton from './components/FunctionButton';

export default function OwnerTenantPage() {
  let tenantID = '000'; // placeholder
  let tenant = tenantsData.tenants[tenantID];
  const location = useLocation();
  if (location.state) {
    const { personID } = location.state;
    if (personID) {
      tenantID = personID;
      tenant = tenantsData.tenants[tenantID];
    }
  }

  const handleDelete = () => {
    alert('delete');
  };
  const handleTA = () => {
    alert('TA');
  };

  return (
    <>
      <BackButton />
      <TenantProfileDets tenant={tenant} />
      <FunctionButton
        performFunction="Delete Tenant"
        handleClick={handleDelete}
      />
      <FunctionButton
        performFunction="Tenancy Agreement"
        handleClick={handleTA}
      />
    </>
  );
}
