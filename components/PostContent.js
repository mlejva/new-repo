import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import html from 'remark-html';
import { post } from 'lib/posts';

const PostContent = ({ content }) => {
  const processedContent = remark().use(html).processSync(content).toString();

  return (
    <div
      className="prose prose-lg max-w-none mt-8"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
};

PostContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default PostContent;