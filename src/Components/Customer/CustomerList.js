import React from 'react';
import Card from '../UI/Card';

const CustomerList=props=>{
    return (
        <Card>
        <ul>
            {props.customers.map((customer)=>(
                <li>
                    {customer.name} ({customer.age} years old.)
                </li>
            ))}
        </ul>
        </Card>
    )
};
export default CustomerList;