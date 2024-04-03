const API_KEY = process.env.API_KEY;

import Results from '../components/Results';

export default async function Home({ searchParams }) {

  const genre = searchParams.genre || 'fetchTrending';
  console.log("genre: ", genre);
  const API_URL = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US`

  // const genre = searchParams.genre || 'all';
  // console.log("genre: ", genre);
  // const API_URL = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' :
  //   genre === 'fetchTrending' ? 'trending/all/week' :
  //     'genre/movie/list'}?api_key=${API_KEY}&language=en-US`

  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error('Failed to get a response from the API');
  }


  const data = await res.json();

  const results = data.results;
  console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  )
}
