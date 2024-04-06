import {useState, useEffect} from 'react';
import '../style/App.css';
import AllRoutes from './AllRoutes';
import UsersApi from '../api';
import UserContext from '../UserContext';
import NavigationBar from './NavigationBar';

function App() {
  const [users, setUsers]= useState();
  const [newUser, setNewUser] = useState(null);
  const oldUser = newUser;
  // get all users 
  useEffect(()=>{
    async function getAllUsers(){
      let users = await UsersApi.getAllUsers();
      setUsers(users);
    }
    async function addUser(){
      await UsersApi.addUser(newUser.email, newUser.firstName, newUser.lastName, newUser.status);
    }
    if(oldUser !== newUser || newUser !== null) addUser(newUser);
    getAllUsers();
  },[newUser]);
  
  console.log(users);

  return (
    <UserContext.Provider value={{users, setNewUser}}>
      <div className="App">
        <NavigationBar/>
        <AllRoutes/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
