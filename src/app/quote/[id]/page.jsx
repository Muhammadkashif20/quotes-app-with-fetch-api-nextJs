
import { notFound } from 'next/navigation'
import React from 'react'

const QuoteCards =async ({params}) => {
    let singleQuotes= await fetch(`https://dummyjson.com/quotes/${params.id}`)
    singleQuotes=await singleQuotes.json()
    if(!singleQuotes){
        notFound()
    }
  return (
    <div className='my-5'>
        <h1 className='text-center font-bold text-3xl'>Single Quote 📄</h1>
    <div className='border border-blue-500 m-5 p-5 flex items-center align-middle flex-col'>
        <h1 className='font-semibold text-2xl'>{singleQuotes.quote}</h1>
        <h1 className='font-medium text-xl'>Quotes By <span className='underline'>{singleQuotes.author}</span></h1>
    </div>
    </div>
  )
}

export default QuoteCards
