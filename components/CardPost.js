import React from 'react';
import Image from 'next/image';
import InfoPost from './InfoPost';
import Link from 'next/link';

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href={'/detail'}>
        <Image src={thumbnail} alt="thumbnail" width={500} height={500} className="rounded-xl" />
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}
