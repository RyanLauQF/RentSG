import * as React from 'react';

import tenantsData from '../../assets/tenants.json';
import TenantProfileDets from '../shared/TenantProfileDets';
import BackButton from './components/BackButton';
import FunctionButton from './components/FunctionButton';

export default function OwnerTenantPage() {
  const tenantID = '000'; // placeholder
  const tenant = tenantsData.tenants[tenantID];

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
      <FunctionButton performFunction="Delete Tenant" handleClick={handleDelete} /> 
      <FunctionButton
        performFunction="Tenancy Agreement"
        handleClick={handleTA}
      />
    </>
  );
}
