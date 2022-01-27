import { useState, useEffect, useRef } from 'react'

/**
 * Intersection visibility
 * Detect when an element is displayed on the viewport
 */
const useIntersectionVisibility = () => {
  const elementRef = useRef(null)
  const lastScrollTop = useRef<number>(0)
  const [ isElementVisible, setIsElementVisible ] = useState<boolean>(false)

  // handle observation
  const handleObserve = (entries:IntersectionObserverEntry[]) => {
    const [ entry ] = entries
    setIsElementVisible(entry.isIntersecting)
  }

  useEffect(() => {
    // create observer
    const observer = new IntersectionObserver(handleObserve, { threshold: 0.5 })

    // observe when scroll
    const scroller = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop.current && elementRef.current) observer.observe(elementRef.current)
      lastScrollTop.current = st <= 0 ? 0 : st
    }

    // listen to scroll
    window.addEventListener('scroll', scroller)

    // unmount
    return () => {
      window.removeEventListener('scroll', scroller)
      elementRef.current && observer.unobserve(elementRef.current)
    }
  }, [elementRef])

  // RETURN
  return { 
    elementRef,
    isElementVisible
  }
}
export default useIntersectionVisibility