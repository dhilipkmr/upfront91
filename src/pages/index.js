import React, {useRef} from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import "../utils/normalize.css"
import "../utils/css/screen.css"
import "../utils/css/components/custom.css"

import Speakers from '../components/Speakers';
import ContactUs from '../components/ContactUs';

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0;
  const $themeSection = useRef(null);
  const $speakerRef = React.createRef();
  const $contactUsSection = useRef(null);

  const registerUser = () => {
    window.open('/', "_blank");
  };

  const scrollToLocation = (anchor) => {
    if (anchor === 'theme') {
      window.scrollTo(0, $themeSection.current.getBoundingClientRect().y - 20);
    } else if (anchor === 'speakers') {
      window.scrollTo(0,  $speakerRef.current.getBoundingClientRect().y - 20);
    } else if (anchor === 'contactus') {
      window.scrollTo(0, $contactUsSection.current.getBoundingClientRect().y - 20);
    }
  };

  return (
    <Layout title={siteTitle} scrollToLocation={scrollToLocation}>
      <SEO title="upfront91" keywords={[`conference`, `frontend-meetup`, `frontend`, `meetup`, `goibibo-meetup`]}/>
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}
      <div ref={$themeSection} class="theme">{`"${data.site.siteMetadata.theme}"`}</div>
      <Speakers list={data.site.siteMetadata.speakersList} ref={$speakerRef}/>
      <ContactUs ref={$contactUsSection}/>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        theme
        speakersList {
          name
          topic
          role
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
