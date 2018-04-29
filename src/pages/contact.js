import React from "react";

export default ({ data }) =>
  <div>
    <h1>
      Contact {data.site.siteMetadata.title}
    </h1>
    <p>
    	We really care about pandas and want to hear from others who do too!
    </p>
  </div>

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
