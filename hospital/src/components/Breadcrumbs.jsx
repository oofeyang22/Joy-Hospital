import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const location = useLocation()
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') return null
  
  const pathnames = location.pathname.split('/').filter(x => x)
  
  // Static mapping for breadcrumb labels
  const routeLabels = {
    'about': 'About Us',
    'services': 'Services',
    'doctors': 'Doctors',
    'facilities': 'Facilities',
    'testimonials': 'Testimonials',
    'achievements': 'Achievements',
    'contact': 'Contact'
  }
  
  const getBreadcrumbName = (name) => {
    return routeLabels[name] || name.charAt(0).toUpperCase() + name.slice(1)
  }
  
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        const displayName = getBreadcrumbName(name)
        
        return (
          <span key={name}>
            <span aria-hidden="true"> / </span>
            {isLast ? (
              <span aria-current="page">{displayName}</span>
            ) : (
              <Link to={routeTo}>{displayName}</Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}