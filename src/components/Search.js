import React, { useState } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Link from "./Link";

function Search({ client }) {
  const [state, setState] = useState({ links: [], filter: "" });
  const { links, filter } = state;

  const _executeSearch = async () => {
    // filer and links from state
    const result = await client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter },
    });
    const links = result.data.feed.links
    setState({...state, links : links})
  };

  return (
    <div>
      <div>
        Search
        <input
          type="text"
          onChange={(e) => setState({ ...state, filter: e.target.value })}
        />
        <button onClick={() => _executeSearch()}>OK</button>
      </div>
      {links.map((link, index) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </div>
  );
}

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

export default withApollo(Search);
