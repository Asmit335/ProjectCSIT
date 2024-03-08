// Import this function where you need to make the API call
import axios from 'axios';

export function makeOrder(cashoutDetails) {
    return axios.post('/api/cashout', cashoutDetails);
}