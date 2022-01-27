import React, { FunctionComponent  } from "react"
import { Container } from 'react-bootstrap'

/**
 * FOOTER
 */
const Footer:FunctionComponent = () => (
  <div className="bg-dark text-center text-light py-4">
    <Container className="small">
      ©2022 by Aurélien Dudonney
      <br />
      Powered with themoviedb.org
    </Container>
  </div>
)

export default Footer