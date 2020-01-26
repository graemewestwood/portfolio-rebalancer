import axios from 'axios';

export async function latestPrice(ticker) {
    
    //Grab API Key
    const pk = process.env.REACT_APP_IEX_KEY;
    //Construct URL
    const priceURL = "https://cloud.iexapis.com/stable/stock/" + ticker +"/quote/latestPrice?token=" + pk;
    //Grab Price
    const res = await axios.get(priceURL);
    return await res.data;
}