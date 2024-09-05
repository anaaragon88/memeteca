//CRUD
import axios from 'axios';
const URL = 'http://localhost:3000/memes';

export const getAllMemes = async() => {
    const response = await axios.get(URL);
    return response.data;
    
}

