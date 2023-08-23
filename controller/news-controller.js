
import News from '../models/news.js';

export const getNews = async (request, response) => {

    try {
        // await News.deleteMany();
        const data = await News.find({});
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ message: data.message });
    }
}