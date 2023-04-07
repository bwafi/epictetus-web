import Image from 'next/image';
import React from 'react';
import featured from '../public/featured.jpg';
import InfoPost from './InfoPost';
import author1 from '../public/author-1.jpg';

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex text-white">
        <div className="flex w-8/12">
          <Image src={featured} alt="Hero image" className="rounded-xl" />
        </div>
        <InfoPost
          category="UI DESIGN"
          date="July 2, 2021"
          title="Understanding color theory: the color wheel and finding complementary colors"
          shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
          authorAvatar={author1}
          authorName="Leslie Alexander"
          authorJob="UI Designer"
        />
      </div>
    </article>
  );
}
