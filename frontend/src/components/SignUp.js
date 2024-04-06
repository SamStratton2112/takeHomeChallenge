import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from '../UserContext'

const SignUp = () =>{
    const [formData, setFormData] = useState({email:'', firstName:'', lastName:''});
    const {setNewUser} = useContext(UserContext);
    const nav = useNavigate();
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData(data=>({
            ...data,
            [name]:value
        }));
    };
    const handleSubmit = e=>{
        e.preventDefault();
        setNewUser({...formData, status : "pending"});
        nav('/')
    }
    console.log(formData)

    return (
        <>
            <h1>Yodlr Registration Portal</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input
                type='email'
                id='email'
                name='email'
                placeholder="email"
                value={formData.email }
                onChange={handleChange}
            />
            <br/>
                <label htmlFor="firstName">First Name: </label>
                <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
                <br/>
            <label htmlFor="lastName">Last Name: </label>
            <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder="lastName"
                value={formData.lastName }
                onChange={handleChange}
            />
            <br/>
            <button>Register!</button>
        </form>
        </>
    )
}

export default SignUp;