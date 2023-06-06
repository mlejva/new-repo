import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import PostList from '../components/PostList';

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold mb-6">Latest Posts</h1>
        <PostList posts={allPostsData} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}