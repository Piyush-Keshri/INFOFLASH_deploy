// Import necessary components and libraries
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../service/api"; // Import a function to fetch news data

import Article from "./Article"; // Import the Article component

// Create a functional component named Articles
const Articles = () => {

    // Define a useEffect hook to run when the component mounts
    useEffect(() => {
        // Call the dailyNews function
        dailyNews();
    }, []);

    // Define a state variable 'news' using the useState hook, initially an empty array
    const [news, setNews] = useState([]);

    // Define a function 'dailyNews' to fetch news data
    const dailyNews = async () => {
        // Call the 'getNews' function to fetch news data and set it in the 'news' state
        let response = await getNews();
        setNews(response.data);
    }

    // Render the component
    return (
        <Box>
            {/* Map over the 'news' array and render an 'Article' component for each data item */}
            {
                news.map(data => (
                    <Article data={data} />
                ))
            }
        </Box>
    )
}

// Export the 'Articles' component as the default export
export default Articles;