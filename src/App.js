import React from 'react';
import AddCustomer from './Components/Customer/AddCustomer';
import CustomerList from './Components/Customer/CustomerList';

function App() {
  return (
    <div>
     <AddCustomer />
     <CustomerList customers={[]}/>
    </div>
  );
}

export default App;
