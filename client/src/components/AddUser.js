import React, { useState } from 'react'
import { FormControl,Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../redux/actions/userActions'

function AddUser() {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState(0)
    const [gender,setGender]=useState('male')
    const [birthday,setBirthday]=useState('')

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addUser({username,email,age,gender,birthday},navigate))
    }
  return (
    <Form style={{width:"40%",margin:"50px auto"}} onSubmit={handleSubmit} >
        <FormControl type='text' placeholder='username' onChange={e=>setUsername(e.target.value)}  />
        <br/>
        <FormControl type='text' placeholder='email' onChange={e=>setEmail(e.target.value)}  />
        <br/>
        <FormControl type='number' placeholder='age' onChange={e=>setAge(e.target.value)}   />
        <br/>
        <FormControl type='date' onChange={e=>setBirthday(e.target.value)} />
        <br/>
        <Form.Select size="lg" onChange={e=>setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Form.Select>
      <br/>
      <Button type='submit' className='w-100'>Submit</Button>
    </Form>
  )
}

export default AddUser