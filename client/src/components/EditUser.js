import React, { useEffect, useState } from 'react'
import {format} from 'date-fns'
import { FormControl,Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editUser } from '../redux/actions/userActions'

function EditUser() {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState('')
  const [gender,setGender]=useState('male')
  const [birthday,setBirthday]=useState(new Date())

  const user=useSelector(state=>state.userReducer.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
useEffect(()=>{
setUsername(user?.username)
setEmail(user?.email)
setAge(user?.age)
setGender(user?.gender)
setBirthday(user?.birthday)
},[user])
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(editUser(user._id,{username,email,age,gender},navigate))
}
  return (
    <Form style={{width:"40%",margin:"50px auto"}} onSubmit={handleSubmit} >
        <FormControl type='text' placeholder='username' defaultValue={username} onChange={e=>setUsername(e.target.value)}  />
        <br/>
        <FormControl type='text' placeholder='email' defaultValue={email} onChange={e=>setEmail(e.target.value)}  />
        <br/>
        <FormControl type='number' placeholder='age' defaultValue={age} onChange={e=>setAge(e.target.value)}   />
        <br/>
        <FormControl type='date' defaultValue={format(new Date(birthday), 'yyyy-MM-dd')} onChange={e=>setBirthday(e.target.value)} />
        <br/>
        <Form.Select size="lg" defaultValue={gender} onChange={e=>setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Form.Select>
      <br/>
      <Button type='submit' className='w-100'>Submit</Button>
    </Form>
  )
}

export default EditUser