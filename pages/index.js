import CardPost from '@/components/CardPost';
import Container from '@/components/Container';
import FeaturedPost from '@/components/FeaturedPost';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { useState } from 'react';
import mockPost from '/utils/posts.json';

export default function Home() {
  const [posts, setPosts] = useState(mockPost);

  return (
    <>
      <Head>
        <title>Home &mdash; Epictetus</title>
        <meta name="description" content="Epictetus Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <FeaturedPost />
          <div className="flex flex-wrap md:mt-14 mt-4 border-none lg:border-t-2 lg:border-white/10">
            {posts.map((post) => (
              <div className="md:w-4/12 px-4 mt-5 w-full" key={post.id}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
