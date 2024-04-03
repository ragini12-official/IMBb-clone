export default function Results({results}) {
  return (
    <div>
        {
            results.map((result) => {
                const movieTitle = result.title || result.name;
                const movieOriginalTitle = result.original_title || result.original_name;
                console.log(movieTitle);
                console.log(movieOriginalTitle);
                return <div key={result.id}>
                    <h1>{movieOriginalTitle}</h1>
                    <h4>{movieTitle}</h4>
                </div>
            })
        }
    </div>
  )
}