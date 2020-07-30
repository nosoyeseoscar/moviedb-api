import baseUrl from "./urls";

const getMovies = async (keyword,page = "1") => {
    const resp = await fetch(`${baseUrl}${keyword}&page=${page}`);
    const resJson = await resp.json();
    return resJson.results
};

export default getMovies;
