import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from '../UserContext'
import '../style/Signup.css'

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
        if(!formData.email.length<1 || !formData.firstName.length<1 || !formData.lastName.length<1){
            setNewUser({...formData, status : "pending"});
            nav('/admin')
        }else{alert('Missing Information!')}
    }
    console.log(formData)

    return (
        <>
        <h1>Register for Yodlr!</h1>
        <form onSubmit={handleSubmit}>
             <label htmlFor="firstName">First Name: </label>
            <input
                className="m-1"
                type='text'
                id='firstName'
                name='firstName'
                style={{borderRadius: "5px"}}
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                />
                <br/>
            <label htmlFor="lastName">Last Name: </label>
            <input
            className="m-1"
                type='text'
                style={{borderRadius: "5px"}}
                id='lastName'
                name='lastName'
                placeholder="Last Name"
                value={formData.lastName }
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="email">Email: </label>
            <input
                className="m-1"
                style={{borderRadius: "5px"}}
                type='email'
                id='email'
                name='email'
                placeholder="Email@email.com"
                value={formData.email }
                onChange={handleChange}
            />
            <br/>
            <button className="m-1" style={{borderRadius: "5px"}} >Register!</button>
        </form>
        </>
    )
}

export default SignUp;