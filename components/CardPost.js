import React from 'react';
import Image from 'next/image';
import InfoPost from './InfoPost';

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Image src={thumbnail} alt="thumbnail" width={500} height={500} className="rounded-xl" />
      <InfoPost {...infoPost} />
    </article>
  );
}
