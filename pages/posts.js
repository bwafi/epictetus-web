import { useState } from 'react';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import CardPost from '@/components/CardPost';
import SectionHeader from '@/components/SectionHeader';
import mackPost from '/utils/posts.json';

export default function Posts() {
  const [posts, setPosts] = useState(mackPost);
  return (
    <Layout>
      <Container>
        <SectionHeader />
        {!posts.length ? (
          <div className="text-center md:py-20 py-32">
            <h2 className="md:text-6xl text-4xl mb-6">No result 😥</h2>
            <p className="md:text-xl text-lg md:w-6/12 w-full mx-auto px-4">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div className="md:w-4/12 px-4 mt-5 w-full" key={post.id}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
