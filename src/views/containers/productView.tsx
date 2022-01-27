import React, { FunctionComponent, useEffect } from 'react'
import { useParams, useLocation, Navigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ProductDisplay from '@src/views/components/productDisplay'

const ProductView:FunctionComponent = () => {
  const { pathname } = useLocation()
  const { id } = useParams()

  // restore the scoll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // that normally can't happen because the routing
  if (!id) return <Navigate to={"/"} />

  // render
  return (
    <Container className="my-4">
      <ProductDisplay id={id} />
    </Container>
  )
}

export default ProductView