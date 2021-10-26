import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
const Navbar = () => {
  const data = useStaticQuery(graphql`
     {
      allSite {
        nodes {
          siteMetadata {
            title
            description
          }
        }
      }
    }
  `)
  const {title} = data.allSite.nodes[0].siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
