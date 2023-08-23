import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../service/api";

import Article from "./Article";

const Articles = () => {


    useEffect(() => {
        dailyNews();
    }, []);


    const [news, setNews] = useState([]);
    const dailyNews = async () => {
        let response = await getNews();
        setNews(response.data);
    }



    return (

        <Box>
            {
                news.map(data => (
                    <Article data={data} />
                ))
            }
        </Box>

    )

}

export default Articles;