import React from "react"
import { Link } from 'gatsby';


export default function Layout({ children }) {
  return (
    <>
      <nav style={{ backgroundColor: '#ccc', padding: '1rem 2rem' }}>
        <ul style={{ display: 'flex', listStyleType: 'none', gap: "1rem" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/foo/">foo</Link>
          </li>
          <li>
            <Link to="/bar/">bar</Link>
          </li>
        </ul>

      </nav>
      <main style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </main>
    </>
  )
}
