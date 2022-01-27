import React, { FunctionComponent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@src/services/hooks/storeHook'
import { actions } from '@src/store'
import { Row, Col } from 'react-bootstrap'
import useIntersectionVisibility from '@src/services/hooks/intersectionVisibilityHook'
import Spinner from '@src/views/atoms/spinner'
import ProductPreview from '@src/views/components/productPreview'

const ProductsInfinite:FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const { products, isOnLoad, currentPage, isAllLoad } = useAppSelector(store => store.products)
  const { elementRef, isElementVisible } = useIntersectionVisibility()

  // initial load
  useEffect(() => {
    if (!currentPage) {
      dispatch(actions.products.fetch_request())
    }
  }, [currentPage])

  // load next page
  useEffect(() => {
    if (isElementVisible && !isAllLoad && currentPage) {
      dispatch(actions.products.fetch_request({ page: currentPage + 1 }))
    }
  }, [isElementVisible, currentPage, isAllLoad])
  
  // return
  return (
    <>
      {/* Products */}
      <Row>
        {products && products.map(product => (
          <Col
            key={`movie-${product.id}`} 
            sm="6" 
            md="4" 
            xl="3" 
            className="mb-4"
          >
            <ProductPreview {...product} />
          </Col>
        ))}
      </Row>

      {/* 
        Loading trigger and loading information  
        > The trigger must always be displayed
        > The information display depends of the state
      */}
      <div ref={elementRef}>
        {isOnLoad && <Spinner />}
      </div>
    </>
  )
}

export default ProductsInfinite

