import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import FourZeroFour from '../images/404.svg';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <div className="text-center">
          <h1 className="mb-8">Page Not Found</h1>
          <Link to="/">
            <img className="mb-2" src={FourZeroFour} alt="" />
            <p>Back to home page</p>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
