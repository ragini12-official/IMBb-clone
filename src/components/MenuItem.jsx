import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon className='text-2xl sm:hidden'/>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

/**
 * On clicking the About MenuItem, the url '/about' is generated as is configured here.
 * But we haven't explicitly attached any component against that route. Then how does
 * it know which component/page is supposed to be rendered?
 */