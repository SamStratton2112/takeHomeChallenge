import axios from "axios"

// set base url 
const BASE_URL  = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

// API class for methods used to send requests 

class UsersApi{
    static async request(endpoint, data={}, method="get"){
        console.debug("API Call:", endpoint, data, method);
        // dynamic url to be passed in axios request
        const url = `${BASE_URL}/${endpoint}`
        // if GET request then extract parameters 
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
    // returns [{id,
	//      email,
	//      firstName,
	//      lastName,
	//      state}, ...]
    static async getAllUsers(){
        let res = await this.request(`users`);
        return res
    }

    // GET /:id
    // returns {id,
	//      email,
	//      firstName,
	//      lastName,
	//      state}
    static async getUser(id){
        let res = await this.request(`users/${id}`);
        return res
    }

    // POST
    // adds a user 
    // returns {
	//      email,
	//      firstName,
	//      lastName,
	//      state,
    //      id }
    static async addUser(email, firstName, lastName, state){
        let res = await this.request(`users`, {email, firstName, lastName, state}, "post");
        return res
    }  
}

export default UsersApi;
