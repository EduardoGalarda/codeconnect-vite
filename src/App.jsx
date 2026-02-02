import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const PageLogin = lazy(() => import('./Pages/PageLogin'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PageLogin />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
