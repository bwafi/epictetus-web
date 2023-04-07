import React from 'react';
import Image from 'next/image';

export default function InfoPost({ category, date, title, shortDescription, authorAvatar, authorName, authorJob }) {
  return (
    <>
      <div className="flex items-center space-x-4 text-white/60 mt-4">
        <div>{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className="text-2xl mt-4 text-white">{title}</h2>
      <p className=" my-5 text-white/60">{shortDescription}</p>
      <div className="flex items-center my-5">
        <Image src={authorAvatar} alt="author-1" width={50} height={50} className="rounded-full" />
        <div className="ml-4 ">
          <h3 className="text-base ">{authorName}</h3>
          <p className="text-sm mt-1">{authorJob}</p>
        </div>
      </div>
    </>
  );
}
