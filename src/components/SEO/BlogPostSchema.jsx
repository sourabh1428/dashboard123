import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * BlogPostSchema - Adds structured data for blog posts
 * 
 * @param {Object} props
 * @param {string} props.title - The title of the blog post
 * @param {string} props.description - A description of the blog post
 * @param {string} props.authorName - The name of the author
 * @param {string} props.authorUrl - URL to the author's profile
 * @param {string} props.publishDate - ISO date string when the post was published
 * @param {string} props.modifiedDate - ISO date string when the post was last modified
 * @param {string} props.featuredImage - URL to the featured image
 * @param {string} props.canonicalUrl - The canonical URL of the blog post
 * @param {Array<string>} props.categories - Categories the blog post belongs to
 * @param {Array<string>} props.tags - Tags for the blog post
 * @param {string} props.content - The main content of the blog post (can include HTML)
 */
const BlogPostSchema = ({
  title,
  description,
  authorName = "Easibill Team",
  authorUrl = "https://easibill.site/about",
  publishDate,
  modifiedDate = publishDate,
  featuredImage,
  canonicalUrl,
  categories = [],
  tags = [],
  content
}) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "name": title,
          "description": description,
          "image": featuredImage,
          "author": {
            "@type": "Person",
            "name": authorName,
            "url": authorUrl
          },
          "publisher": {
            "@type": "Organization",
            "name": "Easibill",
            "logo": {
              "@type": "ImageObject",
              "url": "https://easibill.site/assets/easibill-logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          },
          "datePublished": publishDate,
          "dateModified": modifiedDate,
          "articleBody": content ? content.replace(/<[^>]*>?/gm, '') : '',
          "keywords": tags.join(", "),
          "articleSection": categories.join(", ")
        })}
      </script>
    </Helmet>
  );
};

export default BlogPostSchema; 