
const User = ({user})=>{
    return(
        <div>
            <p>{user.firstName +' '+ user.lastName}</p>
        </div>
    )
}

export default User;