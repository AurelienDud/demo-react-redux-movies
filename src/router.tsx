import React, { FunctionComponent } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import PageLayout from '@src/views/containers/pageLayout'
import HomeView from '@src/views/containers/homeView'
import ProductView from '@src/views/containers/productView'
import ErrorView from '@src/views/containers/errorView'
import ProductModalView from '@src/views/containers/productModalView'

/**
 * Router
 * Handle the app views
 */
const Router:FunctionComponent = () => {
  const location = useLocation()
  const locationState = location.state as { backgroundLocation?: Location }

  return (
    <>
      {/* Basic routing */}
      <Routes location={locationState?.backgroundLocation || location}>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/movie/:id" element={<ProductView />} />
          <Route path="/errors/:code" element={<ErrorView />} />
          <Route path="*" element={<ErrorView />} />
        </Route>
      </Routes>

      {/* Open a modal view */}
      {locationState?.backgroundLocation && (
        <Routes>
          <Route path="/movie/:id" element={<ProductModalView />} />
        </Routes>
      )}
    </>
  )
}

export default Router
