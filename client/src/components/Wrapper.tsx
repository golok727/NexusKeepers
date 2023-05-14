import React, { ReactNode } from 'react'

type WrapperProps = { children: ReactNode }
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="container max-w-6xl mx-auto lg:px-0 px-3 py-3">
      {children}
    </div>
  )
}

export default Wrapper
