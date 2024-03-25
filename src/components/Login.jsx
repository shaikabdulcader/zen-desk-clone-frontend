import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/AxiosService'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Popup from './Popup';
import ApiRoutes from '../utils/ApiRoutes';
function Login() {

  const navigate = useNavigate()

  useEffect(()=>{
    sessionStorage.clear()
  },[])
  
  const handleLogin = async(e)=>{
    e.preventDefault()
   try {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let res = await AxiosService.post(ApiRoutes.USER_LOGIN.path,formProps,{
      authenticate:ApiRoutes.USER_LOGIN.authenticate
    })
    if(res.status===200)
    {
      sessionStorage.setItem('token',res.data.token)
      sessionStorage.setItem('role',res.data.role)
      sessionStorage.setItem('name',res.data.name)

      toast.success(res.data.message)
      
      navigate('/admin/dashboard')
    }
    else
    {
      toast.error(res.data.message)
    }
   } catch (error) {
      toast.error(error.response.data.message)
   }
  }

  return <>
    <Header/>
    <div className='loginWrapper'>
    <h3>Admin Login</h3>
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>

      <Button variant="warning" className='text-white' type="submit">
        Login
      </Button>
    </Form>
    <Popup/>
  </div>
  </>
 
}

export default Login