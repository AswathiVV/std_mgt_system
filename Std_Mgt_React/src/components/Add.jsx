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
        <>
        <form onSubmit={handleSubmit}>
            <input type="number" name="roll_no" id="roll_no" placeholder="Roll No" value={roll_no} onChange={(e)=>setRollno(e.target.value)}/>
            <input type="text" name="name" id="name" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="number" name="age" id="age" value={age} placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
            <input type="text" name="email" id="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" name="phno" id="phno" value={phno} placeholder="Phone" onChange={(e)=>setPhno(e.target.value)}/>
            <input type="submit" value="update"/>
        </form>
        </>
    )
}
export default Add