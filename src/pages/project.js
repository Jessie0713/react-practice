import React from "react"
import Layout from "../components/Layout"
import { makeStyles } from "@material-ui/core/styles"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import * as styles from "../style/project.module.css"
import Img from "gatsby-image"
const Project = ({ data }) => {
  const useStyle = makeStyles({
    portfolio: {
      textAlign: "center",
    },
    h2: {
      fontSize: "3em",
      marginTop: "80px",
    },
    h3: {
      fontSize: "3em",
      fontWeight: 400,
    },
  })
  const { portfolio, h3, h2 } = useStyle()
  console.log("jessie", data)
  const projects = data.project.nodes
  return (
    <Layout>
      <div className={portfolio}>
        <h2 className={h2}>Portfolio</h2>
        <h3 className={h3}>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/" + project.frontmatter.slug} id={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>
          Like what you see? email me at{" "}
          {data.contact.nodes[0].siteMetadata.contact} for a quote!
        </p>
      </div>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query QueryProject {
    project: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: allSite {
      nodes {
        siteMetadata {
          contact
        }
      }
    }
  }
`
