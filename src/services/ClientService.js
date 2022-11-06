import axios from "axios";

const CLIENT_REST_API_URL = 'http://localhost:8080/api/clients'

class ClientService{

    createClient(client){
        return axios.post(CLIENT_REST_API_URL, client)
    }

}

export default new ClientService()