import React , {useState} from 'react';
import style from './AddCustomer.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddCustomer=props=>{
const [inputtedUsername,enterUsername] = useState('');
const [inputtedAge,enterAge] = useState('');

    const submitHandler=event=>{
        event.preventDefault();

        if(inputtedUsername.trim().length===0 || inputtedAge.trim().length === 0){
            return;
        }
        
        if(inputtedAge<=0){
            return;
        }

        console.log(inputtedUsername,inputtedAge);
        enterUsername('');
        enterAge('');
    };

    const usernameChangeFunc=event=>{
        enterUsername(event.target.value);
    }

    const ageChangeFunc=event=>{
        enterAge(event.target.value);
    }

    return(
    <Card className={style.input}>
        <form onSubmit={submitHandler}>
            <label className={style.label} htmlFor='username'>Username</label>
            <input id="username" type="text" value={inputtedUsername} onChange={usernameChangeFunc}></input>
            <label htmlFor='age'>Age</label>
            <input id="age" type="number" value={inputtedAge} onChange={ageChangeFunc}></input>
            <Button type="submit">Register</Button>
        </form>
     </Card>
    );
}


export default AddCustomer;