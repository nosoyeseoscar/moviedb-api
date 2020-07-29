const apiKey = "50b9918d626f4c7d70f884deda9f2281";
const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

export {popularUrl}
export default baseUrl;