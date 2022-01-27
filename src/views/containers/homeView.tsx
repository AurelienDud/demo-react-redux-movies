import React, { FunctionComponent } from 'react'
import { Container } from 'react-bootstrap'
import ProductsInfinite from '@src/views/components/productsInfinite'

/**
 * HOME PAGE
 * With some random contents
 */
const HomeView:FunctionComponent = () => (
  <Container className="my-4">
    <h1 className='h3 mb-4 text-dark'>
      New & upcoming movies
    </h1>
    <ProductsInfinite />
  </Container>
)

export default HomeView
