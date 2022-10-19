import { Button, Input } from '@chakra-ui/react'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {register} from "../Redux/AuthReducer/action"


const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email:"",
    name:"",
    password:""
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({...form,[name]:value})
  };
  const handleForm = (e) =>{
    e.preventDefault()
    dispatch(register(form))
    alert('Signup successfully')
    navigate('/login')
  }
  return (
    <div>
      <form onSubmit={handleForm} style={{width:"50%",margin:"auto",paddingTop:"5%"}}>
        <Input type={'email'} name="email" placeholder="Enter Email" value={form.email} onChange={handleChange}/><br/><br/>
        <Input type={'text' } name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} /><br/><br/>
        <Input type={'password'} name="password" placeholder="Enter Password" value={form.password} onChange={handleChange} />
        <Button type='submit' w={'100%'}>Signup</Button>
      </form>
    </div>
  )
}

export default Signup