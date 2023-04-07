import CardPost from '@/components/CardPost';
import FeaturedPost from '@/components/FeaturedPost';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([
    {
      ategory: 'UI DESIGN',
      date: 'July 2, 2021',
      title: 'Understanding color theory: the color wheel and finding ,complementary colors',
      shortDescription:
        'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
      authorAvatar: '',
      authorName: 'Leslie Alexander',
      authorJob: 'UI Designer',
    },
  ]);

  return (
    <>
      <Head>
        <title>Epictetus</title>
        <meta name="description" content="Epictetus Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen">
        <Navbar />
        <div className="container mx-auto">
          <FeaturedPost />
          <div className="fle">
            <div className="w-4/12">
              <CardPost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
