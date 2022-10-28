import { Button, Card, Form, ListGroup } from 'react-bootstrap'
import {format} from 'date-fns'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { deleteUser, getOnUser } from '../redux/actions/userActions'

function UserCard({username,email,age,gender,birthday,_id}) {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleDelete=()=>{
if(window.confirm('Are you sure')){
  dispatch(deleteUser(_id))
}
  }

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Header>{username}</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>{email}</ListGroup.Item>
      <ListGroup.Item>age : {age}</ListGroup.Item>
      <ListGroup.Item>birthday :{format(new Date(birthday),'MM/dd/yyyy')}</ListGroup.Item>
      <ListGroup.Item>
      <Form className="mb-3">
          <Form.Check
              inline
              label='male'
              name='group1'
              type='radio'
              defaultChecked={gender==="male"}
              readOnly
          />
          <Form.Check
              inline
              label='female'
              name='group1'
              type='radio'
              defaultChecked={gender==="female"}
              readOnly
          />
      
        </Form>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button variant='danger' onClick={handleDelete} >Delete</Button>
      <Button variant='info' onClick={()=>{
        dispatch(getOnUser(_id));
        navigate(`/edituser/${_id}`)
      }} >Edit</Button>
      </ListGroup.Item>
    </ListGroup>
  </Card>

  )
}

export default UserCard