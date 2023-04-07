import Image from 'next/image';
import React from 'react';
import InfoPost from './InfoPost';

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex text-white md:flex-nowrap flex-wrap">
        <div className="flex lg:w-8/12 md:w-8/12 w-full px-4">
          <Image src="/featured.jpg" alt="Hero image" width={500} height={500} className="rounded-xl w-full" />
        </div>
        <div className="lg:w-4/12 md:w-5/12 px-4 w-full">
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="/author-1.jpg"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </article>
  );
}
