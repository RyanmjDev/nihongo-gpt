import React from 'react'

const BtnDivider = () => {
  return (
    <div className="flex items-center justify-center py-2">
    <div className="flex-grow border-t border-gray-300"></div>
    <span className="flex-shrink mx-4 text-gray-300">or</span>
    <div className="flex-grow border-t border-gray-300"></div>
  </div>
  )
}

export default BtnDivider