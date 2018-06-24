import axios from "axios";

const APIKEY = "&api-key=858f11798658491a8c27582a10013b8d"

export default {
    search: (query, startDate, endDate) => {
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${startDate}&end_date=${endDate}${APIKEY}`);
    },
    saveArticle: (article) => {
        console.log(article);
        // return axios.post("/api/save", article);
    }
}
