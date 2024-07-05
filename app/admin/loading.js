import React from 'react';

const loading = () => {
  return (
    <div className='fixed inset-0 bg-green-200 flex justify-center items-center z-50  '>
      
      
      <span className="loading loading-spinner text-success loading-lg m-2"></span>
      <h1 className="text-2xl font-bold text-center text-green-900">Loading...</h1>
    </div>
  )
}

export default loading
