import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { lazy } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastProvider } from './components/Toast.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import App from './App.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Doctors = lazy(() => import('./pages/Doctors.jsx'))
const Facilities = lazy(() => import('./pages/Facilities.jsx'))
const OTIcuCare = lazy(() => import('./pages/JoyIcuCare.jsx'))
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'))
const Achievements = lazy(() => import('./pages/Achievements.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'doctors', element: <Doctors /> },
      { path: 'facilities', element: <Facilities /> },
      { path: 'ot-icu-care', element: <OTIcuCare /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'achievements', element: <Achievements /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

// Initialize app
const root = document.getElementById('root')
if (!root) {
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found</div>'
  throw new Error('Root element not found!')
}

try {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <ToastProvider>
          <Suspense fallback={<LoadingScreen />}>
            <RouterProvider router={router} />
          </Suspense>
        </ToastProvider>
      </ErrorBoundary>
    </StrictMode>,
  )
} catch (error) {
  if (import.meta.env.DEV) {
    console.error('Error rendering app:', error)
  }
  root.innerHTML = '<div style="padding: 20px; color: red;">Error loading app. Check console for details.</div>'
}