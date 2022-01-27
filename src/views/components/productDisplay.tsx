import React, { FunctionComponent, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@src/services/hooks/storeHook'
import { timeToDate } from '@src/services/utils/timeUtils'
import { Row, Col,  } from 'react-bootstrap'
import { actions } from '@src/store'
import Spinner from '@src/views/atoms/spinner'

interface ProductDisplay {
  id: string,
  isModal?: boolean
}

/**
 * Product Display component
 */
const ProductDisplay:FunctionComponent<ProductDisplay> = ({ id, isModal = false }) => {
  const dispatch = useAppDispatch()
  const { product, isOnLoad, isOnError } = useAppSelector(store => store.product)
  
  // Fetch request
  useEffect(() => {
    dispatch(actions.product.fetch_request({ id }))
  }, [id])

  // When fetch on error
  if (isOnError) return <Navigate to={"/errors/500"} />

  // When on load + fallback
  if (isOnLoad || !product) return <Spinner />

  // Return
  return (
    <Row>
      {/* POSTER */}
      <Col sm={4} lg={3} xl={isModal ? 2 : 3}>
        <img 
          src={product.poster_image} 
          alt="" 
          className="img-thumbnail" 
          style={{ aspectRatio: '1 / 1.5'}}
        />
      </Col>
  
      {/* PRODUCT INFOS */}
      <Col className='py-1'>
        {product.date && (
          <p className='mb-3 small'>
            Sortie prévue le {timeToDate(product.date)}
          </p>
        )}
        <h1 className='h3 mb-3'>
          {product.title}
        </h1>
        
        <p>
          {product.overview}
        </p>
      </Col>
    </Row>
  ) 
}

export default ProductDisplay