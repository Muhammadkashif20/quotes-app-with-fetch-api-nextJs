  'use client'
  import { useEffect } from 'react'
  export default function Error({ error, reset }) {
    useEffect(() => {
      console.error('error=>',error)
    }, [error]) 
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center'>
        <h2 className='font-bold text-3xl text-red-500 mb-4'>{error.message}</h2>
        <p className='text-gray-600 mb-6'>Something went wrong. Please try again.</p>
        
        <button
          onClick={() => reset()}
          className='bg-red-500 text-white py-2 px-6 rounded-full text-xl transition-transform transform hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
        >
          Try Again
        </button>
      </div>
    </div>
    
    )
  }