import React from 'react'

const Containar = ({children,className}) => {
  return (
    <div className={`max-w-screen-xl mx-auto ${className}`}>{children}</div>
  )
}

export default Containar