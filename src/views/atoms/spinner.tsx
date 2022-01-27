import React, { FunctionComponent } from 'react'
import { Spinner } from 'react-bootstrap'

const CustomSpinner:FunctionComponent = () => (
  <div className='p-3 text-center'>
    <Spinner animation='border' />
  </div>  
)

export default CustomSpinner