import { Button, Input } from '@chakra-ui/react'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login} from '../Redux/AuthReducer/action'


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({...form,[name]:value})
  };
  const handleForm = (e) =>{
    e.preventDefault()
    dispatch(login(form))
    navigate('/bmi')
  }
  return (
    <div style={{width:"50%",margin:"auto",paddingTop:"5%"}}>
      <form onSubmit={handleForm}>
        <Input type={'email'} name="email" placeholder="Enter Email" value={form.email} onChange={handleChange}/><br/><br/>
        <Input type={'password'} name="password" placeholder="Enter Password" value={form.password} onChange={handleChange} /><br/><br/>
        <Button type='submit' w={'100%'}>Login</Button>
      </form>
    </div>
  )
}

export default Login