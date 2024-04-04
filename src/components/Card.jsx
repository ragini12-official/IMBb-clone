import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
    console.log(result.id);

    return (
        <div className="hover:opacity-90 transition-opacity duration-200 cursor-pointer m-2 sm:hover:shadow-slate-600 sm:hover:dark:shadow-slate-900 sm:shadow-lg rounded-lg">
            <Link href={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    width={500}
                    height={500}
                    className="sm:rounded-t-lg">

                </Image>

                <div className="m-3">
                    <p className="line-clamp-2 font-normal dark:font-thin">{result.overview}</p>
                    <h1 className="mt-2 text-lg font-semibold truncate">{result.title || result.name}</h1>
                    {/* <h2 className="text-sm" >{result.original_title || result.original_name}</h2> */}

                    <p className="flex items-center text-sm">
                        {result.release_date || result.first_air_date}
                        <FiThumbsUp className="h-5 mr-1 ml-5"/>
                        {result.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}
