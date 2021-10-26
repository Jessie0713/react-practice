import Img from "gatsby-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../style/project-detail.module.css"
import { graphql } from "gatsby"
const ProjectDetail = ({ data }) => {
  const { title, stack } = data.markdownRemark.frontmatter
  const {html} = data.markdownRemark
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3> 
        <div className={styles.featured}>
          <Img fluid={data.markdownRemark.frontmatter.featuredImg.childImageSharp.fluid}></Img>
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default ProjectDetail

export const query = graphql`
  query ProjectDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
