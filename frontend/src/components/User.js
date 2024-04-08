import {Card} from 'react-bootstrap';

const User = ({user})=>{
    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{user.firstName +' '+ user.lastName}</Card.Title>
                <Card.Text>
                    {user.email}
                </Card.Text>
            </Card.Body>
            <p></p>
        </Card>
        </>
    )
}

export default User;