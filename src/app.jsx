import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import React, { useEffect } from 'react'
import { Router } from 'wouter'
import PageRouter from './components/router.jsx'
import useHashLocation from './hooks/wouter-hash'
import Seo from './components/seo.jsx'
import BinsNav from './components/BinsNav'
import Footer from './components/BinsFooter'

export default function Home() {
  const [location] = useHashLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <Router hook={useHashLocation}>
      <Seo />
      <main role="main" className="wrapper" id="Redlid">
        <div className="content">
          <BinsNav />
          <PageRouter />
          <Footer />
        </div>
      </main>
    </Router>
  )
}
