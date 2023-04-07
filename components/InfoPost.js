import React from 'react';
import Image from 'next/image';

export default function InfoPost({ category, date, title, shortDescription, authorAvatar, authorName, authorJob }) {
  return (
    <>
      <div className="w-4/12 px-6 ">
        <div className="flex items-center space-x-4 text-white/60">
          <div>{category}</div>
          <span>&bull;</span>
          <div>{date}</div>
        </div>
        <h2 className="text-2xl mt-4 text-white">{title}</h2>
        <p className="w-9/12 my-6 text-white/60">{shortDescription}</p>
        <div className="flex items-center my-6">
          <Image src={authorAvatar} alt="author-1" className="rounded-full w-12 h-12" />
          <div className="ml-4">
            <h3 className="text-base ">{authorName}</h3>
            <p className="text-sm mt-1">{authorJob}</p>
          </div>
        </div>
      </div>
    </>
  );
}
