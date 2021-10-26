import React from "react"
import Layout from "../components/Layout"
import * as styles from "../style/home.module.css"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
const Index = ({ data }) => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link to="/project" className={styles.btn}>
            My Portfolio Projects
          </Link>
          <button onClick={console.log("jessie", data)}>
            query
          </button>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query IndexPhoto {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
