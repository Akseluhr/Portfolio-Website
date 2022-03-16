import React from 'react'

import { Spinner } from 'react-bootstrap'

const SmallLoader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '15px',
        height: '15px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default SmallLoader
