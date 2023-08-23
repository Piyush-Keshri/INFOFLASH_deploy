import axios from 'axios';

export const getNews = async () => {

    const url = '';
    try {
        return await axios.get(`${url}/news`);
    }
    catch (error) {
        console.log('Error While Calling The News API', error);
    }
}