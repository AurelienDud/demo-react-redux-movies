import React, { FunctionComponent } from 'react'
import { Link, useLocation } from "react-router-dom"
import { Card } from 'react-bootstrap'

/**
 * MOVIE PREVIEW COMPONENT
 */
const ProductPreview:FunctionComponent<Product> = ({ 
  id,
  title,
  date,
  poster_image
}) => {
  const location = useLocation()

  return (
    <Card className="h-100 rounded-3 shadow" title={title}>
      {/* POSTER */}
      <Card.Img 
        style={{ aspectRatio: '1 / 1.5'}}
        variant="top" 
        src={poster_image} 
      />
    
      {/* LINK */}
      <Link 
        to={`/movie/${id}`} 
        state={{ backgroundLocation: location }}
        className="stretched-link m-0"
      >
        <span className="visually-hidden-focusable">
          Voir
        </span>
      </Link>

      {/* TITLE */}
      {!!date && (
        <Card.Footer className="small text-muted text-center text-truncate">
          {title}
        </Card.Footer>
      )}
    </Card>
  )
}

export default ProductPreview