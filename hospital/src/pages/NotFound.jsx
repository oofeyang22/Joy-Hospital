import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <h1>Page Not Found</h1>
      <p className="muted">The page you are looking for doesn’t exist.</p>
      <Link className="btn" to="/">Go Home</Link>
    </section>
  )
}

