import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

const Comments = ({ post }) => {
  const data = useStaticQuery(graphql`
    query SiteUrlQuery {
      site {
        siteMetadata {
          url
        }
      }
    }
  `)

  let disqusConfig = {
    url: `${data.site.siteMetadata.url + post.path}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <>
      <CommentCount config={disqusConfig} placeholder={"..."} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default Comments
