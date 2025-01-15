import { useState } from "react";
import axios from "axios";

function Add(){
    const[roll_no,setRollno] = useState('')
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[email,setEmail] = useState('')
    const[phno,setPhno] = useState('')

    const handleSubmit =(e)=> {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/std/',{roll_no,name,age,email,phno}).then(res=>{
            setRollno('')
            setName('')
            setAge('')
            setEmail('')
            setPhno('')
        }).catch(error=>console.log(error.message))
         
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="number" name="roll_no" id="roll_no" value={task.roll_no} onChange={handleChange}/>
            <input type="text" name="name" id="name" value={task.name} onChange={handleChange}/>
            <input type="number" name="age" id="age" value={task.age} onChange={handleChange}/>
            <input type="text" name="email" id="email" value={task.email} onChange={handleChange}/>
            <input type="text" name="phno" id="phno" value={task.phno} onChange={handleChange}/>
            <input type="submit" value="update"/>
        </form>
    )
}
export default Add