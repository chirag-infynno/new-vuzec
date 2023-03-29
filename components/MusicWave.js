import React from 'react'

export const Music = () => {
  return (
    <div className="loader flex">
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
      <span className="stroke"></span>
    </div>
  )
}

export const MusicWave = ({ animationStyle }) => {
  return (
    <div className={`flex  ${animationStyle}`}>
      <Music />
      <Music />
      <Music />
      <Music />
    </div>
  )
}
