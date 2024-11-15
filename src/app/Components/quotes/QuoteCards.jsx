import React from 'react';

const QuoteCards = ({ author, quote }) => {
  return (
    <div className="border border-gray-200 m-5 p-6 rounded-lg shadow-sm bg-white">
      <h1 className="font-semibold text-xl mb-3 text-gray-800">
        {`"${quote}"`}
      </h1>
      <h1 className="text-md text-gray-600">
      {'-'}  <span className="text-blue-500 font-medium">{author}</span>
      </h1>
    </div>
  );
};

export default QuoteCards;
