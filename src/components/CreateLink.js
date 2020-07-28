import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

export default function CreateLink() {
  const [state, setState] = useState({ description: "", url: "" });

  const { description, url } = state;
  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={description}
          onChange={(e) => setState({ ...state, description: e.target.value })}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          value={url}
          onChange={(e) => setState({ ...state, url: e.target.value })}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <Mutation
        mutation={POST_MUTATION}
        variables={{ description, url }}
      >
        {(PostMutation) => <button onClick={PostMutation}>Submit</button>}
      </Mutation>
    </div>
  );
}

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;
