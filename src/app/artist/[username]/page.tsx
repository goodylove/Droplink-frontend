import SingleArtistTemplate from "@/components/templates/singleArtistPage";
import React from "react";

function ArtistPublicLinkPage({ params }: { params: { username: string } }) {
  return <SingleArtistTemplate username={params.username} />;
}

export default ArtistPublicLinkPage;
