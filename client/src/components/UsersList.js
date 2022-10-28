import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/actions/userActions'
import UserCard from './UserCard'

function UsersList() {
const users=useSelector(state=>state.userReducer.users)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",width:"85%",margin:"50px auto"}}>
        {
            users.map(user=>
                <UserCard key={user._id} {...user} />
                )
        }
    </div>
  )
}

export default UsersList