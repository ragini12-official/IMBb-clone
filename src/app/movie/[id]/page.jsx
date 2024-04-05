const API_KEY = process.env.API_KEY;

import React from 'react'

import Image from 'next/image';

export default async function Movie({ params }) {
    console.log("Params", params);
    const movieId = params.id;
    console.log("Movie id: ", movieId);

    const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    const res = await fetch(API_URL);
    // console.log(res.status);
    // console.log(res.statusText);

    console.log("Response: ", res);
    console.log("Response okay:", res.okay);
    console.log("Response status: ", res.status);
    console.log("Resposne text: ", res.statusText);

    // res.ok returned undefined

    if (res.status !== 200) throw new Error("Failed to fetch movie info.");

    const movie = await res.json();
    console.log(movie);

    return (
        <div className='w-full'>
            <div className='p-4 md:pt-8 flex md:flex-row flex-col content-center mx-w-6xl mx-w-auto md:space-x-6'>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    width={500}
                    height={300}
                    className='rounded-lg '
                    style={{maxWidth: '100%', height: '100%'}}>

                </Image>
                <div className='p-2'>
                    <h2 className='text-xl mb-3 font-bold'>{movie.title || movie.name}</h2>
                    <p className='text-lg mb-3 '>{movie.overview}</p>
                    <p className='mb-3'>
                        <span className='font-semibold'>Date Released: </span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold'>Rating: </span>
                        {movie.vote_count}
                    </p>
                </div>
            </div>
        </div>
    )
}

