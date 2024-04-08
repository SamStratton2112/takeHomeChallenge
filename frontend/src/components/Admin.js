import UserContext from "../UserContext";
import { useContext } from "react";
import User from './User';
import {Row, Col} from 'react-bootstrap';
import '../style/Admin.css';

const Admin = ()=>{
    const {users} = useContext(UserContext);
    console.log(users)
    return(
        <>
        <h1>All Users</h1>
        <div className="userContainer">
            <Row xs={1} md={3} className="g-4 justify-content-center">
                {users.map((user)=> <Col className="d-flex justify-content-center"><User user={user}/></Col>)}
            </Row>
        </div>
        </>
    )
}

export default Admin;