import React, {useRef} from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import "../utils/css/components/custom.css"

import Speakers from '../components/Speakers';
import ContactUs from '../components/ContactUs';

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  let postCounter = 0;
  const $themeSection = useRef(null);
  const $speakerRef = React.createRef();
  const $contactUsSection = useRef(null);

  const registerUser = () => {
    window.open('/', "_blank");
  };

  const doScroll = (anchor) => {
    if (anchor === 'theme') {
      window.scrollTo(0, $themeSection.current.getBoundingClientRect().y - 20);
    } else if (anchor === 'speakers') {
      window.scrollTo(0,  $speakerRef.current.getBoundingClientRect().y - 20);
    } else if (anchor === 'contactus') {
      window.scrollTo(0, $contactUsSection.current.getBoundingClientRect().y - 20);
    }
  };

  const scrollToLocation = (anchor) => {
    const $wrap = document.querySelector('#site-wrapper');
    if ($wrap.classList.contains('site-head-open')) {
      $wrap.classList.remove('site-head-open');
      setTimeout(() => {
        doScroll(anchor);
      }, 500);
    } else {
      doScroll(anchor);
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
      <div class="view">
        <div ref={$themeSection} class="theme mb20p">
          {`"${data.site.siteMetadata.theme}"`}
        </div>
        <Speakers list={data.site.siteMetadata.speakersList} ref={$speakerRef}/>
        <ContactUs ref={$contactUsSection}/>
      </div>
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
