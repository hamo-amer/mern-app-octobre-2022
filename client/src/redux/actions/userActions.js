import axios from 'axios'
import { GET_ALL_USERS, GET_USER } from '../types'

export const getAllUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/users/allusers')
        dispatch({
            type:GET_ALL_USERS,
            payload:res.data.users
        })
    } catch (error) {
        console.log(error)
    }
}


export const addUser=(data,navigate)=>async(dispatch)=>{
try {
    await axios.post('/api/users/adduser',data)
    navigate('/')
  } catch (error) {
    console.log(error)
}
}

export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/users/${id}`)
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error)
    }
}
export const editUser=(id,data,navigate)=>async(dispatch)=>{

    try {
        await axios.put(`/api/users/${id}`,data)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
export const getOnUser=(id)=>async(dispatch)=>{
    try {
      const res=  await axios.get(`/api/users/getuser/${id}`)
        dispatch({
            type:GET_USER,
            payload:res.data.user
        })
    } catch (error) {
        console.log(error)
    }
}