import { notFound } from 'next/navigation';
import React from 'react';

const QuoteCards = async ({ params }) => {
  // Fetch single quote data
  let singleQuotes = await fetch(`https://dummyjson.com/quotes/${params.id}`);
  singleQuotes = await singleQuotes.json();

  // If the API returns an error or not found message
  if (singleQuotes.message) {
    notFound();
  }

  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-3xl mb-6 text-gray-800">Single Quote 📄</h1>
      <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white mx-auto max-w-3xl">
        <h1 className="font-semibold text-2xl mb-4 text-gray-700">
          "{singleQuotes.quote}"
        </h1>
        <h1 className="text-md text-gray-600">
          - <span className="text-blue-500 font-medium">{singleQuotes.author}</span>
        </h1>
      </div>
    </div>
  );
};

export default QuoteCards;
