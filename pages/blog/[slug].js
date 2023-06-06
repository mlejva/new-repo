import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPostSlugs } from '../../lib/posts';
import PostContent from '../../components/PostContent';
import Layout from '../../components/Layout';
import { PostMetadata } from '../../lib/posts';

export default function Post({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <PostContent post={post} />
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'content',
  ]);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: true,
  };
}