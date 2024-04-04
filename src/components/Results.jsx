import Card from '@/components/Card';

export default function Results({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-w-6xl mx-auto ml-5 mr-5 mt-4 mb-4 py-4 px-5'>
        {
            results.map((result) => (
                <Card result={result}/>
            ))
        }
    </div>
  )
}