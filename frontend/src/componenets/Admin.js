import UserContext from "../UserContext";
import { useContext } from "react";
import User from './User';

const Admin = ()=>{
    const {users} = useContext(UserContext);
    console.log(users)
    return(
        <div>
            <h1>All Users</h1>
            <div>
                {users.map((user)=> <User user={user}/>)}
            </div>
        </div>
    )
}

export default Admin;