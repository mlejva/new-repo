import React from 'react';
import Link from 'next/link';

const PostCard = ({ post }) => {
  const { title, date, slug, excerpt } = post;

  return (
    <div className="post-item" id={`post-item-${slug}`}>
      <h2 className="post-title" id={`post-title-${slug}`}>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h2>
      <p className="post-date" id={`post-date-${slug}`}>
        {new Date(date).toLocaleDateString()}
      </p>
      <p className="post-excerpt" id={`post-excerpt-${slug}`}>
        {excerpt}
      </p>
    </div>
  );
};

export default PostCard;