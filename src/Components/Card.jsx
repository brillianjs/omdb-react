import React from 'react'

function Card({children}) {
  return (
    <div className='max-w-xs container flex justify-center items-center p-3 flex-col border rounded-lg'>
        <h1>{children}</h1>
    </div>
  )
}

export default Card 