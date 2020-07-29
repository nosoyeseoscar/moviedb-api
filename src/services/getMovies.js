import baseUrl from "./urls";

const getMovies = async (keyword) => {
    const resp = await fetch(`${baseUrl}${keyword}`);
    const resJson = await resp.json();
    return resJson.results
};

export default getMovies;
