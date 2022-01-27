import React, { FunctionComponent } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import ProductDisplay from '@src/views/components/productDisplay'

const ProductView:FunctionComponent = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  // close the modal
  const handleClose = () => {
    navigate(-1)
  }

  // Normally can't happen
  if (!id) {
    handleClose()
    return <></>
  } 

  // render
  return (
    <Modal show={true} onHide={handleClose} fullscreen="sm-down" size="lg">
      <Modal.Header closeButton />

      <Modal.Body>
        <ProductDisplay id={id} isModal={true} />
      </Modal.Body>

      <Modal.Footer>
        <Link to={`/movie/${id}`} className="btn btn-primary">
          See details
        </Link>
      </Modal.Footer>
    </Modal>
  )
}

export default ProductView