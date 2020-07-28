import React from "react";
import Link from "./Link";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export default function LinkList() {
  return (
    <Query query={FEED_QUERY}>
     {
         ({ loading , error, data}) => {
             if(loading){return(<div>Fetching</div>)}
             if(error){return(<div>error</div>)}

             const linksToRender = data.feed.links
             return(
                 <div>
                     {
                        linksToRender.map((link) => <Link key={link.id} link={link} />)
                     }
                 </div>
             )
         }
     }
    </Query>
  );
}

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
