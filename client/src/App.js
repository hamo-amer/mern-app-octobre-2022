import {Routes,Route} from 'react-router-dom'
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import UsersList from './components/UsersList';
import EditUser from './components/EditUser'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<UsersList />} />
      <Route path='adduser' element={<AddUser />} />
      <Route path='edituser/:id' element={<EditUser />} />
    </Routes>
    </>
  );
}

export default App;
