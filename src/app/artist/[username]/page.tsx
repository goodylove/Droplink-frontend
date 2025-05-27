import React from "react";

function ArtistPublicLinkPage({ params }: { params: { username: string } }) {
  console.log(params.username);
  return <div>hello</div>;
}

export default ArtistPublicLinkPage;
