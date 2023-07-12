import React from 'react';
import style from './AddCustomer.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddCustomer=props=>{

    const submitHandler=event=>{
        event.preventDefault();
    };

    return(
    <Card className={style.input}>
        <form onSubmit={submitHandler}>
            <label className={style.label} htmlFor='username'>Username</label>
            <input id="username" type="text"></input>
            <label htmlFor='age'>Age</label>
            <input id="age" type="number"></input>
            <Button type="submit">Register</Button>
        </form>
     </Card>
    );
}


export default AddCustomer;