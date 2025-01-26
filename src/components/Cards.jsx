import React from 'react'

function Cards({children,bg}) {
  return (
    <div className={`${bg} p-6 rounde-lg shadow-md`}>
      {children}
    </div>
  )
}

export default Cards
