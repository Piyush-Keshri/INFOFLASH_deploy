
import news from './models/news.js';
import CurrentsApi from 'currentsapi';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.API_TOKEN
const currentsapi = new CurrentsApi(key);

const DefaultData = async () => {
    try {
        const data = await currentsapi.search({
            language: 'en',
            // regions: 'IN'
        }); // Wait for the API call to complete

        await news.deleteMany({});
        await news.insertMany(data.news); // Assuming `news` is the property containing the desired data in the API response

        console.log('Data uploaded successfully');
    } catch (error) {
        console.log('Error', error.message);
    }
}



// const DefaultData = async () => {
//     console.log(data);
//     try {
//         await news.insertMany(data);
//         console.log('Data uploaded successfully');
//     }
//     catch (error) {

//         console.log('Error', error.message);
//     }

// }

export default DefaultData;