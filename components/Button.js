import classNames from 'classnames'
import React from 'react'

const Button = ({ children, className }) => {
  return (
    <div className="relative w-full max-w-[360px] hover:scale-105 transition-all ease-in-out">
      <button
        className={classNames(
          'bg-[#B71544] w-full max-w-[336px] rounded-[10px] shadow-btn text-white font-bold text-xl sm:text-2xl flex justify-center items-center py-3 ',
          className,
        )}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
