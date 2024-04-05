const API_KEY = process.env.API_KEY;

import Results from '../components/Results';

export default async function Home({ searchParams }) {

  const genre = searchParams.genre || 'fetchTrending';
  const API_URL = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/day'}?api_key=${API_KEY}&language=en-US`

  // const genre = searchParams.genre || 'all';
  // console.log("genre: ", genre);
  // const API_URL = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' :
  //   genre === 'fetchTrending' ? '/trending/all/week' :
  //     '/genre/movie/list'}?api_key=${API_KEY}&language=en-US`

  const res = await fetch(API_URL);

  //accessing response headers
  // const headers = res.headers;
  // console.log(headers);

  if (!res.ok) {
    throw new Error('Failed to get a response from the API');
  }
  else{
    console.log("Data fetched successfully.");
  }

  const data = await res.json();

  const results = data.results;
  // console.log(results);

  console.log("LOGGIN' RESULT DATA");
  results.map((result) => {
    console.log(result.id);
    console.log(result.title || result.name);
  })


  return (
    <div>
      <Results results={results} />
    </div>
  )
}
