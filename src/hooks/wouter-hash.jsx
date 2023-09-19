import { useState, useEffect, useCallback } from 'react'

const currentLoc = () => window.location.hash.replace('#', '') || '/'

const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLoc())

  useEffect(() => {
    const handler = () => setLoc(currentLoc())

    // Subscribe on hash changes
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  const navigate = useCallback((to) => (window.location.hash = to), [])
  return [loc, navigate]
}

export default useHashLocation
