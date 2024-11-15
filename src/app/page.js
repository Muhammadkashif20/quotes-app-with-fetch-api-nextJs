import React from 'react'
import QuoteCards from './Components/quotes/QuoteCards'
import Link from 'next/link'
const page = async()  => {
  let quotes= await fetch('https://dummyjson.com/Quotes')
  quotes=await quotes.json()
  console.log('quotesFetch=>',quotes);
  if(quotes.ok){
    throw new Error('Api Not Found')
  }
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold my-10'>Quotes App 📑</h1>
    {quotes.quotes.map((data)=> 
    <Link key={data.id} href={`/quote/${data.id}`}>
    <QuoteCards key={data.id} author={data.author} quote={data.quote}/>
    </Link>
    )}
    </div>
  )
}

export default page
