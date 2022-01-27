import React, { FunctionComponent } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Alert } from 'react-bootstrap'

/**
 * ERROR VIEW
 */
const ErrorView:FunctionComponent = () => {
  // default is not found
  const { code = "404" } = useParams()

  // return
  return (
    <Container className="my-4">
      <Alert variant='warning'>
        <h1 className='h3 mb-3'>
          {code === "404" ? 'Nothing by there...' : 'Something happened!'}
        </h1>
        <Link to="/" className='btn btn-warning btn-sm'>
          Go to the home page
        </Link>
      </Alert>
    </Container>
  )
}

export default ErrorView
