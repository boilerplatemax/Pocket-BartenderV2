import React from 'react'
import lost from '../resources/images/lost.png'

export default function NoResultsImg() {
  return (
    <div>
        <h1>Nothing here...</h1>
        <h2 className='text-muted'>No results found</h2>
        <img src={lost} className='img__no-results'/>
    </div>
  )
}
