import React from "react";
import ContentLoader from "react-content-loader";

const TodoLoader = (props) => (
  <ContentLoader speed={1} width={600} height={310} viewBox="0 0 600 310" backgroundColor="#FF0080" foregroundColor="#7928CA" {...props}>
    <rect x="0" y="0" rx="6" ry="6" width="540" height="88" />
    <rect x="0" y="110" rx="6" ry="6" width="540" height="88" />
    <rect x="0" y="220" rx="6" ry="6" width="540" height="88" />
  </ContentLoader>
);

export { TodoLoader };
