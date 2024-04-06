import axios from "axios"

// set base url 
const BASE_URL  = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

// API class for methods used to send requests 

class UsersApi{
    static async request(endpoint, data={}, method="get"){
        console.debug("API Call:", endpoint, data, method);
        // dynamic url to be passed in axios request
        const url = `${BASE_URL}/${endpoint}`;
        // if GET request then use parameters in data object 
        const params = (method === "get")? data: {};
        try{
            // pass information as configuration object to axios function 
            return(await axios({url, method, data, params})).data;
        }catch(err){
            // handle error
            console.error("API ERROR:", err.message);
            let message = err.response.data.error.message;
            throw Array.isArray(message)? message: [message];
        }
    }

    // GET 
    // Get all users details 
    // returns [{id,
	//      email,
	//      firstName,
	//      lastName,
	//      state}, ...]
    static async getAllUsers(){
        const res = await this.request(`users`);
        return res;
    }

    // POST
    // create a new user 
    // returns {
	//      email,
	//      firstName,
	//      lastName,
	//      state,
    //      id }
    static async addUser(email, firstName, lastName, state){
        const res = await this.request(`users`, {email, firstName, lastName, state}, "post");
        return res;
    }  

    // GET /:id
    // Get user details by id 
    // returns {id,
	//      email,
	//      firstName,
	//      lastName,
	//      state}
    static async getUser(id){
        const res = await this.request(`users/${id}`);
        return res
    }

    // DELETE /:id
    // Delete user by id 
    // returns {deleted : 
    //      {id,
	//      email,
	//      firstName,
	//      lastName,
	//      state} }
    static async deleteUser(id){
        const res = await this.request(`users/${id}`, {}, "delete");
        return {deleted: res};
    }

    // PATCH /:id
    // update user by id 
    // returns {id,
	//      email,
	//      firstName,
	//      lastName,
	//      state}
    static async updateUser(id, data){
        const res = await this.request(`users/${id}`, data, 'patch');
        return res;
    }
}

export default UsersApi;
