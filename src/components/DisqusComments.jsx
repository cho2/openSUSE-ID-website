import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

// Disqus comments for a blog post.
// Shortname is the Disqus site identifier (https://opensuse-id.disqus.com).
const DISQUS_SHORTNAME = 'opensuse-id';
// Canonical site URL — keeps threads consistent between localhost and production.
const SITE_URL = 'https://opensuse.id';

const DisqusComments = ({ post }) => {
  if (!post) return null;

  return (
    <DiscussionEmbed
      shortname={DISQUS_SHORTNAME}
      config={{
        url: `${SITE_URL}/blog/${post.slug}`,
        identifier: post.slug, // stable per-article id, independent of domain
        title: post.title,
        language: 'id',
      }}
    />
  );
};

export default DisqusComments;
