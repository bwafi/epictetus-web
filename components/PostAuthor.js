import React from 'react';
import Image from 'next/image';

export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="flex items-center my-5">
      <Image src={authorAvatar} alt="author-1" width={50} height={50} className="rounded-full" />
      <div className="ml-4 ">
        <h3 className="text-base ">{authorName}</h3>
        <p className="text-sm mt-1">{authorJob}</p>
      </div>
    </div>
  );
}
