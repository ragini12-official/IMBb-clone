'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {

    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    }

    return (
        <form className='flex justify-between px-5 max-w-6xl mx-auto'
        onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full h-14 rounded-md placeholder-gray-500 outline-amber-800 bg-transparent flex-1' />
            <button className='text-amber-600 disabled:text-gray-400' disabled={!search}>Search</button>
        </form>
    )
}