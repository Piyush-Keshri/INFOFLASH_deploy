import mongoose from 'mongoose';


const newsSchema = new mongoose.Schema({
    id: {
        type: String
    },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    url: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    language: {
        type: String
    },
    category: {
        type: Array
    },
    published: {
        type: String,
        required: true
    },


});

const news = mongoose.model('news', newsSchema);

export default news;