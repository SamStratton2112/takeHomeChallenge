import { Navigate, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import SignUp from './SignUp';


const AllRoutes = () =>{
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/admin" element={<Admin/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="*" element={<Navigate to='/'/>}/>
        </Routes>
    )
}

export default AllRoutes;