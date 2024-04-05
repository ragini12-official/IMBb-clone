const API_KEY = process.env.API_KEY;

import React from 'react';

import Resutls from '@/components/Results';

export default async function SearchPage({params}) {
    const searchTerm = params.searchTerm;
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;
    const res = await fetch(API_URL);

    console.log(res);
    // console.log(res.status);
    // console.log(await res.text());
    const data = await res.json();
    // console.log("DATA", data);
    const results = data.results;
    console.log(results);
    // console.log(results);
  return (
    <div>
        {
            results ? (
                results.length === 0 
                ? <h1>No results found.</h1>
                : <Resutls results={results}/>
            ) : (
                <h1>Could not fetch results.</h1>
            )
        }
    </div>
  )
}
