import React from "react";
import ContentLoader from "react-content-loader";

function TodoLoader(props){

  const width = "100%"

  return(
    <ContentLoader speed={1} width={width} height={88} backgroundColor="#FF0080" foregroundColor="#7928CA" {...props}>
    <rect x="0" y="0" rx="6" ry="6" width="100%" height="88" />
  </ContentLoader>
  );
}

export { TodoLoader };
