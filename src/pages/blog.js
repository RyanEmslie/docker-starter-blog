import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              date
              author
            }
            id
          }
        }
      }
    }
  `)
  //   return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <Layout>
      <SEO title="Blog Page" />
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>Posted by: {post.node.frontmatter.author}</small>
          <br />
          <small>Published on: {post.node.frontmatter.date}</small>
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
