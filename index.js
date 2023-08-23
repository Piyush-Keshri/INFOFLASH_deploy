import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';
import cors from 'cors'
import cron from 'node-cron'
import news from './models/news.js';
import path from 'path';
const app = express();

app.use(cors());
app.use('/', Route);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "./client/build")));

app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {
        res.status(500).send(err);
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const url = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@infoflash.g8cl3y3.mongodb.net/?retryWrites=true&w=majority`

Connection(url);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

DefaultData();

// Define the cron job to delete data every 12 hours
cron.schedule('0 */12 * * *', () => {
    // Delete data from the MongoDB collection
    news.deleteMany({}, (err) => {
        if (err) {
            console.error('Error deleting data:', err);
        } else {
            console.log('Data deleted successfully.');
        }
    });
});