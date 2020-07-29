import { popularUrl } from "./urls";
 

const popularMovies = async () => {
  const resp = await fetch( popularUrl );
  const resJson = await resp.json();
  return resJson.results
};

export default popularMovies;
