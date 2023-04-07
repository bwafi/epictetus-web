import { useState } from 'react';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import FeaturedPost from '@/components/FeaturedPost';
import CardPost from '@/components/CardPost';
import mockPost from '/utils/posts.json';

export default function Posts() {
  const [posts, setPosts] = useState(mockPost);

  return (
    <Layout>
      <Container>
        <FeaturedPost />
        <div className="flex flex-wrap md:mt-14 mt-4">
          {posts.map((post) => (
            <div className="md:w-4/12 px-4 mt-5 w-full" key={post.id}>
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
