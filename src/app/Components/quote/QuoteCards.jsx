import React from 'react'

const QuoteCards = ({author,quote}) => {
  return (
    <div className='border border-blue-500 m-5 p-5 '>
        <h1 className='font-semibold text-2xl '>{quote}</h1>
        <h1 className='font-medium text-xl '>Quotes By <span className='underline'>{author}</span></h1>
    </div>
  )
}

export default QuoteCards
